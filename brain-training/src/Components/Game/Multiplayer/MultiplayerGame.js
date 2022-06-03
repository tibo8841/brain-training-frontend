import QuestionsAndAnswers from "../QuestionsAndAnswers";
import Timer from "../Timer";
import ScoreDisplay from "../ScoreDisplay";
import { Container } from "@mui/system";
import { Button } from "@mui/material";
import { Box } from "@mui/material";
import useSound from "use-sound";
import fromTheStart from "../../../Sounds/fromTheStart.mp3";
import { useState } from "react";

export default function MultiplayerGame() {
  const [isMusic, setIsMusic] = useState(false);
  const [play, { stop }] = useSound(fromTheStart, { volume: 0.4 });
  function loadQuestion() {
    return <QuestionsAndAnswers />;
  }

  function handlePlayClick() {
    play();
    setIsMusic(true);
  }
  function handleStopClick() {
    stop();
    setIsMusic(false);
  }

  return (
    <Container align="center">
      {!isMusic ? (
        <Button onClick={handlePlayClick}>Play Music!</Button>
      ) : (
        <Button onClick={handleStopClick}>Stop Music!</Button>
      )}
      <Box align="center" sx={{ justifyContent: "space-between" }}>
        <Timer />
        <ScoreDisplay />
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
