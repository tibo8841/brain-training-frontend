import * as React from "react";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme();

export default function HomePage() {
  return (
    <ThemeProvider theme={theme}>
      <main>
        <Box
          sx={{
            bgcolor: "background.paper",
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="sm">
            <Typography
              component="h2"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
            >
              Dr. Alex's Brain Training
            </Typography>
            <Typography
              variant="h5"
              align="center"
              color="text.secondary"
              paragraph
            >
              Welcome to the best web app ever that will definitely make you so
              much smarter than everyone else!
            </Typography>
            <Stack
              sx={{ pt: 4 }}
              direction="column"
              spacing={2}
              justifyContent="center"
            >
              <Button variant="contained" href="/" size="large">
                Single-Player
              </Button>
              <Button variant="contained" href="/" size="large">
                Multi-Player
              </Button>
              <Button variant="contained" href="/how+to+play" size="large">
                How-to-Play
              </Button>
              <Button variant="contained" href="/leaderboard" size="large">
                Leaderboard
              </Button>
            </Stack>
          </Container>
        </Box>
        <Container sx={{ py: 8 }} maxWidth="md"></Container>
      </main>
    </ThemeProvider>
  );
}

// -HomePage:
//     -Start singleplayer game button
//     -Start multiplayer game lobby button
//     -Leaderboards button
//     -How to Play button
