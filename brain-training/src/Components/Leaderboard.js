import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Stack } from "@mui/material";
import { getLeaderboard } from "./Networking";
import PlayerDisplayCard from "./Game/Multiplayer/PlayerDisplayCard";

const theme = createTheme();

export default function Leaderboard() {
  const [cards, setCards] = React.useState([]);
  React.useEffect(() => {
    const fetchData = async () => {
      const data = await getLeaderboard();
      console.log(data);
      setCards(data);
    };
    fetchData();
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <main>
        {/* Hero unit */}
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
              Leaderboard
            </Typography>
          </Container>
        </Box>
        <Container maxWidth="md">
          {/* End hero unit */}
          <Stack
            sx={{ pt: 4 }}
            direction="column"
            spacing={2}
            justifyContent="center"
          >
            {cards.map((card) => (
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
                    {/* <Typography
                      gutterBottom
                      variant="h5"
                      component="h2"
                      align="center"
                    >
                      {`name: ${card.username}, score: ${card.score}`}
                    </Typography> */}
                    <PlayerDisplayCard
                      avatarID={card.profile_picture_id}
                      username={card.username}
                      score={card.score}
                    />
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
// -Leaderboard
//     -Shows player scores and dates
//     -Shows the users best score and ranking
//     -Option to show just users attempts or everyones
//      attempts
