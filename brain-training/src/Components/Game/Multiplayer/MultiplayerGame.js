import QuestionsAndAnswers from "../QuestionsAndAnswers";
import ScoreDisplay from "../ScoreDisplay";
import { Container } from "@mui/system";
import { Button, Typography } from "@mui/material";
import { Box } from "@mui/material";
import useSound from "use-sound";
import brainTrainCalm from '../../../Sounds/brainTrainCalm.mp3'
import { getProfile } from "../../Networking";
import { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import io from "socket.io-client";
import MultiplayerResults from "./MultiplayerResults";
const socket = io.connect("https://brain-training-multiplayer.sigmalabs.co.uk");
const room = 5678;
// const username = "tibooooo";

export default function MultiplayerGame() {
  const [isMusic, setIsMusic] = useState(false);
  const [score, setScore] = useState(0);
  const [sneakySecondsLeft, setSneakySecondsLeft] = useState(0);
  const [playbackRate, setPlaybackRate] = useState(0.85);
  const [play, { stop }] = useSound(brainTrainCalm, {
    playbackRate,
    volume: 0.2,
  });
  const [scoreList, setScoreList] = useState([]);
  const [username, setUsername] = useState("ANONYMOUS");
  const [questionNumber, setQuestionNumber] = useState(1);
  const [finalScoreList, setFinalScoreList] = useState([]);

  const handleMusicClick = () => {
    if (isMusic) {
      stop();
      setPlaybackRate(playbackRate + 0.1);
      play();
    }
  };


  socket.emit("join_room", { username, room });

  function loadQuestion() {
    return (
      <QuestionsAndAnswers
        addToScore={addToScore}
        resetSneakySeconds={resetSneakySeconds}
      />
    );
  }

  function resetSneakySeconds() {
    setSneakySecondsLeft(20);
    setQuestionNumber(questionNumber + 1);
    setTimeout(newNewQuestion, 500);
  }

  function newNewQuestion() {
    setSneakySecondsLeft(0);
  }

  function handlePlayClick() {
    play();
    setIsMusic(true);
  }
  function handleStopClick() {
    stop();
    setIsMusic(false);
  }

  function addToScore(points) {
    const currentScore = score;
    setScore(currentScore + points);
  }
 
  async function retrieveUser() {
    const user = await getProfile();
    setUsername(user.user.username);
    return user;
  }

  const sendScore = async () => {
    const scoreData = {
      username: username,
      score: score,
      time: new Date(Date.now()).getUTCDate(),
    };

    await socket.emit("send_score", scoreData);
    console.log("sending score is happening");
    setScoreList([...scoreList, scoreData]);
    if (questionNumber > 2) {
      setFinalScoreList([...finalScoreList, scoreData]);
    }
  };

  useEffect(() => {
    console.log("use effect running");
    displayUserScores();
    socket.on("receive_score", (data) => {
      setScoreList([...scoreList, data]);
      if (questionNumber > 2) {
        setFinalScoreList([...finalScoreList, data]);
      }
    });
  }, [scoreList]);

  function highScore() {
    let highScoreList = scoreList.map((user) => user.score);
    console.log(highScoreList);
    console.log(Math.max(...highScoreList));
    return Math.max(...highScoreList);
  }

  function displayUserScores() {
    let highest = highScore();
    let highUser = "ANONYMOUS";
    scoreList.forEach(function (user) {
      if (user.score === highest) {
        highUser = user.username;
      }
    });
    return (
      <Card
        sx={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          bgcolor: "rgb(24,118,209)",
        }}
      >
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="h2"
            align="center"
            color="white"
          >
            {`High Score: ${highest} - ${highUser}  `}
          </Typography>
        </CardContent>
      </Card>
    );
  }

  useEffect(() => {
    sendScore();
  }, [score]);

  if (questionNumber > 2) {
    console.log(finalScoreList);
    return (
      <div>
        <MultiplayerResults finalScoreList={finalScoreList} />
      </div>
    );
  }

  return (
    <Container align="center">
      {!isMusic ? (
        <Button onClick={handlePlayClick}>Play Music!</Button>
      ) : (
        <Button onClick={handleStopClick}>Stop Music!</Button>
      )}
      <Box align="center" sx={{ justifyContent: "space-between" }}>
        <ScoreDisplay score={score} />
        {displayUserScores()}
      </Box>
      <Box align="center">
        {sneakySecondsLeft === 0 ? loadQuestion() : null}
      </Box>
    </Container>
  );
}

//  -Display QuestionAndAnswers component
//     -Display Question first, then after some seconds
//      display options to answer with
//     -Start timer component when answer options display
//     -Display users current score
//     -Quicker you answer = more points
//     -at end of round take you to EndOfRound screen
//     -At end of game display MultiplayerResults
//     -Uses websockets
//     -Game sound?
