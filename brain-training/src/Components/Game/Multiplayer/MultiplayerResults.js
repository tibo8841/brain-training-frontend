import { Container, Typography, Box } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { Stack } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme();

export default function MultiplayerResults(props) {
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
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
            >
              Final Scores!
            </Typography>
          </Container>
        </Box>
        <Container maxWidth="md">
          <Stack
            sx={{ pt: 4 }}
            direction="column"
            spacing={2}
            justifyContent="center"
          >
            {props.finalScoreList.map((player) => (
              <Stack>
                <Card
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                  }}
                >
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="h2"
                      align="center"
                    >
                      {`${player.username}'s - Final Score: ${player.score}`}
                    </Typography>
                  </CardContent>
                </Card>
              </Stack>
            ))}
          </Stack>
        </Container>
      </main>
    </ThemeProvider>
  );
}

// -MultiplayerResults
//     -Display who won
//     -Display rankings of everyone
//     -Start new game button?
//     -Chat component displayed
