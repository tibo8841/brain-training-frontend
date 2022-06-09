import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Stack, Button } from "@mui/material";
import { checkSessions, getProfile, postToLeaderboard } from "../Networking";
import { useNavigate } from "react-router-dom";

export default function SingleplayerResults(props) {
  const [isClicked, setIsClicked] = React.useState(false);
  let navigate = useNavigate();
  async function handleClick(e) {
    const authentication = await checkSessions();
    console.log(authentication);
    if (authentication === true) {
      const profile = await getProfile();
      await postToLeaderboard(profile.user.username, props.score);
      setIsClicked(true);
    } else {
      navigate("/login");
    }
  }

  const theme = createTheme();

  function displayMessage() {
    if (props.score >= 750) {
      return "Very impressive! Grade: A+";
    } else if (props.score >= 690) {
      return "Wow, nicely done! Grade: A";
    } else if (props.score >= 660) {
      return "Nice try, keep it up! Grade: B+";
    } else if (props.score >= 600) {
      return "Not quite genius, you can do better! Grade: B";
    } else if (props.score >= 560) {
      return "Unlucky, you just missed the next grade! Grade: C+";
    } else if (props.score >= 500) {
      return "Really? Is that all you got? Grade: C";
    } else {
      return "You are a failure, go back to school! Grade: U";
    }
  }
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
              Final Score
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
                    {`Your final score is ${props.score}`}
                  </Typography>
                </CardContent>
              </Card>
            </Stack>
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
                    {displayMessage()}
                  </Typography>
                </CardContent>
              </Card>
            </Stack>
          </Stack>
        </Container>
        {isClicked ? null : (
          <Button onClick={handleClick}>Send Score To Leaderboard</Button>
        )}
        <Button href={"/leaderboard"}>leaderbaord</Button>
      </main>
    </ThemeProvider>
  );
}

// -displays your total points at end
// -has  a message depending on how well you did
