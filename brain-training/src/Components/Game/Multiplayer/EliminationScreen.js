import { Box, Container, Typography } from "@mui/material";

export default function EliminationScreen() {
  return (
    <Container>
      <Box mt={"10%"} align="center">
        <Typography variant="h3" align="center" gutterBottom>
          You Have Been Eliminated
        </Typography>
        <Typography
          variant="h4"
          align="center"
          gutterBottom
          marginTop={"15%"}
          marginBottom={"15%"}
        >
          You came:{" "}
        </Typography>
      </Box>
      <Box mt={"10%"} align="center">
        Chat
      </Box>
      <Box mt={"10%"} align="center">
        Bets?
      </Box>
    </Container>
  );
}

// liminationScreen
//     -Displays you are eliminated
//     -Maybe chat for losers? (APPRENTICE CAFE)
//     -Some way to still interact with game?
//     -Place bets on who you think will win?
