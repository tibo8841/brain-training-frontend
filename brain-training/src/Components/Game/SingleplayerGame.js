import QuestionsAndAnswers from "../QuestionsAndAnswers";
import ScoreDisplay from "../ScoreDisplay";
import { Container } from "@mui/system";
import { Button } from "@mui/material";
import { Box } from "@mui/material";
import useSound from "use-sound";
import fromTheStart from "../../../Sounds/fromTheStart.mp3";
import { useState } from "react";

export default function SingleplayerGame() {
  const [isMusic, setIsMusic] = useState(false);
  const [score, setScore] = useState(0);
  const [sneakySecondsLeft, setSneakySecondsLeft] = useState(0);
  const [play, { stop }] = useSound(fromTheStart, { volume: 0.1 });

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

  return (
    <Container align="center">
      {!isMusic ? (
        <Button onClick={handlePlayClick}>Play Music!</Button>
      ) : (
        <Button onClick={handleStopClick}>Stop Music!</Button>
      )}
      <Box align="center" sx={{ justifyContent: "space-between" }}>
        <ScoreDisplay score={score} />
      </Box>
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
