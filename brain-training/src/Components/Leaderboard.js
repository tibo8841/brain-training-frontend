import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import { Stack } from "@mui/material";
import Select from "@mui/material/Select";

const cards = [1, 2, 3, 3, 3, 3, 3, 3];

const theme = createTheme();

export default function Leaderboard() {
  const [sort, setSort] = React.useState("");

  function handleChange(event) {
    setSort(event.target.value);
  }
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
          <Box marginBottom={5}>
            <FormControl fullWidth>
              <InputLabel id="sort-label">Sort</InputLabel>
              <Select
                labelId="sort-button-label"
                id="sort-button"
                value={sort}
                label="Sort"
                onChange={handleChange}
              >
                <MenuItem value={"ASC"}>Ascending</MenuItem>
                <MenuItem value={"DSC"}>Descending</MenuItem>
                <MenuItem value={"RAND"}>Random</MenuItem>
              </Select>
            </FormControl>
          </Box>
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
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="h2"
                      align="center"
                    >
                      Position and Username goes here
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
// -Leaderboard
//     -Shows player scores and dates
//     -Shows the users best score and ranking
//     -Option to show just users attempts or everyones
//      attempts
