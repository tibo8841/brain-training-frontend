import QuestionsAndAnswers from "../QuestionsAndAnswers";
import ScoreDisplay from "../ScoreDisplay";
import { Container } from "@mui/system";
import { Button } from "@mui/material";
import { Box } from "@mui/material";
import useSound from "use-sound";
import fromTheStart from "../../../Sounds/fromTheStart.mp3";
import { useState } from "react";

export default function MultiplayerGame() {
  const [isMusic, setIsMusic] = useState(false);
  const [score, setScore] = useState(0);
  const [play, { stop }] = useSound(fromTheStart, { volume: 0.1 });

  function loadQuestion() {
    return <QuestionsAndAnswers addToScore={addToScore} />;
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
      <Box align="center">{loadQuestion()}</Box>
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
