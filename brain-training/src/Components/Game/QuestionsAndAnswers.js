import { Stack, Button, Box, Typography } from "@mui/material";

export default function QuestionsAndAnswers() {
  function handleClick(e) {}

  return (
    <Box mt={"5%"}>
      <Typography variant="h3" align="center" gutterBottom marginTop={"5%"}>
        Question:
      </Typography>
      <Stack spacing={2}>
        <Button onClick={handleClick}>Answer 1</Button>
        <Button onClick={handleClick}>Answer 2</Button>
        <Button onClick={handleClick}>Answer 3</Button>
        <Button onClick={handleClick} sx={{ marginBottom: "2%" }}>
          Answer 4
        </Button>
      </Stack>
    </Box>
  );
}

// -QuestionsAndAnswers
//     -Shows Question for couple seconds
//     -After Shows 4 answer option buttons
//     -One correct answer
//     -Answer goes green if you are correct
//     -Goes red if incorrect
//     -Hovering over changes colour slightly
