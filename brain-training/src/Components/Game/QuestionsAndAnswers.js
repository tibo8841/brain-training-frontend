import { Grid, Button, Box, Typography, Container } from "@mui/material";
import { useState } from "react";
import { MathsQuestions } from "../../GameQuestions/MathsQuestions";

export default function QuestionsAndAnswers() {
  const [question, setQuestion] = useState("");
  const [answers, setAnswers] = useState([]);
  // let MathsQuestionsArr = MathsQuestions();

  //Question would just be a question but answers would come as an array of 4 objects that we can map through
  // array for answers would look like [{answer: 10, correct:false}, {answer:12, correct:true}]
  // Then we can use the map to make the buttons and also assign which button is the correct one to click
  // let MathsQuestionsArr = MathsQuestions();
  // console.log(MathsQuestions().length);

  function handleClick(e) {}

  function getRandomQuestionAndAnswers() {
    let randomQuestionIndex = Math.floor(
      Math.random() * MathsQuestions().length
    );
    return MathsQuestions()[randomQuestionIndex];
  }

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
