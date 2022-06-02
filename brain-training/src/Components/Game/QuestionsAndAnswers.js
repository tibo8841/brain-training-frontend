import { Grid, Button, Box, Typography, Container } from "@mui/material";

export default function QuestionsAndAnswers() {
  function handleClick(e) {}

  return (
    <Container maxWidth="md">
      <Box mt={"5%"}>
        <Typography variant="h3" align="center" gutterBottom marginTop={"5%"}>
          Question: Who did a thing?
        </Typography>
        <Grid container spacing={2} rowSpacing={4}>
          <Grid item xs={6}>
            <Button onClick={handleClick}>Answer 1</Button>
          </Grid>
          <Grid item xs={6}>
            <Button onClick={handleClick}>Answer 2</Button>
          </Grid>
          <Grid item xs={6}>
            <Button onClick={handleClick}>Answer 3</Button>
          </Grid>
          <Grid item xs={6}>
            <Button onClick={handleClick}>Answer 4</Button>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}

// -QuestionsAndAnswers
//     -Shows Question for couple seconds
//     -After Shows 4 answer option buttons
//     -One correct answer
//     -Answer goes green if you are correct
//     -Goes red if incorrect
//     -Hovering over changes colour slightly
