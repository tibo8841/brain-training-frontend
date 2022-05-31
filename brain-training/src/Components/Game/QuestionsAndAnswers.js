
import { Stack, Button, Box } from "@mui/material";

export default function QuestionsAndAnswers() {
  function handleClick(e) {}

  return (

    <Box>
      <header>Question:</header>
      <Stack spacing={2}>
        <Button onClick={handleClick}>Answer 1</Button>
        <Button onClick={handleClick}>Answer 2</Button>
        <Button onClick={handleClick}>Answer 3</Button>
        <Button onClick={handleClick}>Answer 4</Button>
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
