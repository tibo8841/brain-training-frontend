import QuestionsAndAnswers from "../QuestionsAndAnswers";
import Timer from "../Timer";
import ScoreDisplay from "../ScoreDisplay";
import { Container } from "@mui/system";
import { Box } from "@mui/material";

export default function MultiplayerGame() {
  function loadQuestion() {}
  return (
    <Container align="center">
      <Box align="center" sx={{ justifyContent: "space-between" }}>
        <Timer />
        <ScoreDisplay />
      </Box>
      <Box align="center">
        <QuestionsAndAnswers />
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
