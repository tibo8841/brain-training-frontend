import { Box, Typography } from "@mui/material";
import ScoreDisplay from "../ScoreDisplay";
import Chat from "./Chat";
export default function EndOfRound() {
  function timeOnPage() {}
  function playerScores() {}
  function checkEliminated() {}
  return (
    <Box>
      <Box>
        <ScoreDisplay />
      </Box>
      <Typography
        variant="h4"
        align="center"
        gutterBottom
        marginTop={"15%"}
        marginBottom={"15%"}
      >
        Eliminated Players
      </Typography>
      <Box>
        <Chat />
      </Box>
    </Box>
  );
}

// -EndOfRound
//     -At end of round, display some scores
//     -Display who is getting eliminated
//     -If you are eliminated, take you to EliminationScreen
//     -Display Chat component
//     -Take you back to game after ~20 seconds
