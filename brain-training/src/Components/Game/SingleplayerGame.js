import QuestionsAndAnswers from "./QuestionsAndAnswers";
import ScoreDisplay from "./ScoreDisplay";
import { Container } from "@mui/system";
import { Button } from "@mui/material";
import { Box, Grid } from "@mui/material";
import useSound from "use-sound";
import brainTrainCalm from "../../Sounds/brainTrainCalm.mp3";
import { useState } from "react";
import SingleplayerResults from "./SingleplayerResults";

export default function SingleplayerGame() {
  const [isMusic, setIsMusic] = useState(false);
  const [score, setScore] = useState(0);
  const [sneakySecondsLeft, setSneakySecondsLeft] = useState(0);
  const [questionNumber, setQuestionNumber] = useState(1);
  const [playbackRate, setPlaybackRate] = useState(0.85);
  const [play, { stop }] = useSound(brainTrainCalm, {
    playbackRate,
    volume: 0.2,
  });

  function loadQuestion() {
    return (
      <QuestionsAndAnswers
        nextQuestion={nextQuestion}
        addToScore={addToScore}
        resetSneakySeconds={resetSneakySeconds}
        handleMusicClick={handleMusicClick}
      />
    );
  }

  const handleMusicClick = () => {
    stop();
    setPlaybackRate(playbackRate + 0.1);
    play();
  };

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

  function nextQuestion() {
    resetSneakySeconds();
  }

  if (questionNumber > 10) {
    return (
      <div>
        <SingleplayerResults score={score} />
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
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <h3>Question {questionNumber}/10</h3>
        </Grid>
        <Grid item xs={6}>
          <ScoreDisplay score={score} />
        </Grid>
      </Grid>
      <Button onClick={nextQuestion}>Skip to next question!</Button>
      <Box align="center">
        {sneakySecondsLeft === 0 ? loadQuestion() : null}
      </Box>
    </Container>
  );
}

// -SingleplayerGame
//     -Starts game
//     -Shows questions, then answers
//     -Quicker you answer = more points
//     -Shows timer for each question
//     -Updates score after each question
