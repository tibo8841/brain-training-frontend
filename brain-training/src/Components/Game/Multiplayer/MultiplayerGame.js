import QuestionsAndAnswers from "../QuestionsAndAnswers";
import ScoreDisplay from "../ScoreDisplay";
import { Container } from "@mui/system";
import { Button, Typography } from "@mui/material";
import { Box } from "@mui/material";
import useSound from "use-sound";
import brainTrainCalm from "../../../Sounds/brainTrainCalm.mp3";
import { checkSessions, getProfile } from "../../Networking";
import Paper from "@mui/material/Paper";

import Grid from "@mui/material/Grid";
import { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import io from "socket.io-client";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const socket = io.connect("https://brain-training-multiplayer.sigmalabs.co.uk");
const room = 5678;
const theme = createTheme();

export default function MultiplayerGame() {
  const [isMusic, setIsMusic] = useState(false);
  const [score, setScore] = useState(0);
  const [sneakySecondsLeft, setSneakySecondsLeft] = useState(0);
  const [playbackRate, setPlaybackRate] = useState(0.85);
  const [username, setUsername] = useState("");
  const [avatar, setAvatar] = useState(1);
  const [winMessage, setWinMessage] = useState("");
  const [play, { stop }] = useSound(brainTrainCalm, {
    playbackRate,
    volume: 0.2,
  });
  const [scoreList, setScoreList] = useState([]);

  const [questionNumber, setQuestionNumber] = useState(1);
  const [finalScoreList, setFinalScoreList] = useState([]);

  useEffect(() => {
    retrieveUsername();
    //console.log(username);
  }, [username]);

  const handleMusicClick = () => {
    if (isMusic) {
      stop();
      setPlaybackRate(playbackRate + 0.1);
      play();
    }
  };

  async function retrieveUsername() {
    const auth = await checkSessions();
    if (auth) {
      const user = await getProfile();
      console.log(user);
      setUsername(user.user.username);
      setAvatar(user.user.profile_picture_id);
      setWinMessage(user.user.win_message);
    } else {
      setUsername("ANONYMOUS");
      setAvatar(1);
      setWinMessage("I have the biggest brain!");
    }
  }

  socket.emit("join_room", { username, room });

  function loadQuestion() {
    return (
      <QuestionsAndAnswers
        addToScore={addToScore}
        resetSneakySeconds={resetSneakySeconds}
        handleMusicClick={handleMusicClick}
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

  const sendScore = async () => {
    const scoreData = {
      username: username,
      score: score,
      winMessage: winMessage,
      avatar: avatar,
      time: new Date(Date.now()).getUTCDate(),
    };

    await socket.emit("send_score", scoreData);
    console.log(scoreData);
    setScoreList([...scoreList, scoreData]);
    if (questionNumber > 9) {
      setFinalScoreList([...finalScoreList, scoreData]);
    }
  };

  useEffect(() => {
    //console.log("use effect running");
    displayUserScores();
    socket.on("receive_score", (data) => {
      setScoreList([...scoreList, data]);
      if (questionNumber > 9) {
        setFinalScoreList([...finalScoreList, data]);
      }
    });
  }, [scoreList]);

  function highScore() {
    let highScoreList = scoreList.map((user) => user.score);
    //console.log(highScoreList);
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

  if (questionNumber > 3) {
    let highest = highScore();
    let highUser = "ANONYMOUS";
    let highMessage = "";
    scoreList.forEach(function (user) {
      if (user.score === highest) {
        highUser = user.username;
        highMessage = user.winMessage;
      }
    });

    return (
      <ThemeProvider theme={theme}>
        <Grid container component="main" sx={{ height: "100vh" }}>
          <Grid
            item
            xs={false}
            sm={4}
            md={7}
            sx={{
              backgroundImage: "url(https://source.unsplash.com/random)",
              backgroundRepeat: "no-repeat",
              backgroundColor: (t) =>
                t.palette.mode === "light"
                  ? t.palette.grey[50]
                  : t.palette.grey[900],
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          <Grid
            item
            xs={12}
            sm={8}
            md={5}
            component={Paper}
            elevation={6}
            square
          >
            <Box
              sx={{
                my: 8,
                mx: 4,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Box component="winner-display" noValidate sx={{ mt: 1 }}>
                <Box container>
                  <Box item xl sx={{ mt: 4 }}>
                    <Typography component="h1" variant="h1">
                      Winner!
                    </Typography>
                  </Box>

                  <Box item md sx={{ mt: 4 }}>
                    <Typography component="h2" variant="h2">
                      {`${highUser}`}
                    </Typography>
                  </Box>
                  <Box item md sx={{ mt: 4 }}>
                    <Typography component="h2" variant="h2">
                      {`${highMessage} `}
                    </Typography>
                  </Box>
                  <Box item md sx={{ mt: 4 }}>
                    <Typography component="h3" variant="h3">
                      {`Score: ${highest}`}
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </ThemeProvider>
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
