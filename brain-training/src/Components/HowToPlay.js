import * as React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme();

export default function HowToPlay() {
  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="sm">
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography variant="h2" component="h5">
            How to play Dr. Alex's Brain Trainer!
          </Typography>
          <Box sx={{ mt: 3 }}>
            <Grid item sm={6}>
              <Typography variant="body1">
                Welcome to Dr. Alex’s Brain Training Game! Here’s how it works:
                <br />
                <br />
                -You will be asked a series of questions in which you must
                answer correctly within the time limit <br />- The faster you
                answer the more points you will receive <br />- The more points
                you receive the bigger your brain is and you can flex on all the
                opps
              </Typography>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

// -HowToPlay
//     -Explanation of how to play/how to get most points
//     -Explanation of singleplayer vs. multiplayer
//     -Tells you what rounds there are
