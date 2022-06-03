import { Grid, Button, Box, Typography, Container } from "@mui/material";
import { useState, useEffect } from "react";
import { MathsQuestions } from "../../GameQuestions/MathsQuestions";

export default function QuestionsAndAnswers() {
  const [question, setQuestion] = useState("");
  const [answers, setAnswers] = useState([]);
  const [isClicked, setIsClicked] = useState(false);
  const [isClickedCorrect, setIsClickedCorrect] = useState(false);
  const [isClickedIncorrect, setIsClickedIncorrect] = useState(false);

  useEffect(function getRandomQuestionAndAnswers() {
    let randomQuestionIndex = Math.floor(
      Math.random() * MathsQuestions().length
    );
    let randomQuestionAndAnswers = MathsQuestions()[randomQuestionIndex];
    setQuestion(randomQuestionAndAnswers.Question);
    setAnswers(randomQuestionAndAnswers.Answers);
  }, []);

  function handleClickIncorrect(e) {
    setIsClicked(true);
    setIsClickedIncorrect(true);
  }

  function handleClickCorrect(e) {
    setIsClicked(true);
    setIsClickedCorrect(true);
  }

  return (
    <Container maxWidth="md">
      <Box mt={"5%"}>
        <Typography variant="h3" align="center" gutterBottom marginTop={"5%"}>
          {question}
        </Typography>
        <Grid container spacing={4}>
          {answers.map((answer) => {
            if (answer.correct) {
              return (
                <Grid item xs={6}>
                  <Button
                    onClick={handleClickCorrect}
                    variant="contained"
                    color={isClicked ? "success" : "primary"}
                    disableElevation
                    size="xl"
                    fullWidth="true"
                    sx={{
                      padding: "5%",
                      fontSize: "220%",
                    }}
                  >
                    {answer.answer}
                  </Button>
                </Grid>
              );
            } else {
              return (
                <Grid item xs={6}>
                  <Button
                    onClick={handleClickIncorrect}
                    variant="contained"
                    color={isClicked ? "error" : "primary"}
                    disableElevation
                    size="xl"
                    fullWidth="true"
                    sx={{
                      padding: "5%",
                      fontSize: "220%",
                    }}
                  >
                    {answer.answer}
                  </Button>
                </Grid>
              );
            }
          })}
        </Grid>
        {isClickedCorrect ? (
          <Typography variant="h3" align="center" gutterBottom marginTop={"5%"}>
            Correct! You got __ points
          </Typography>
        ) : isClickedIncorrect ? (
          <Typography variant="h3" align="center" gutterBottom marginTop={"5%"}>
            Incorrect... Unluckyyy
          </Typography>
        ) : null}
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
