import { Grid, Button, Box, Typography, Container } from "@mui/material";
import { useState, useEffect } from "react";
import { MathsQuestions } from "../../GameQuestions/MathsQuestions";
import Timer from "./Timer";

export default function QuestionsAndAnswers(props) {
  const [question, setQuestion] = useState("");
  const [answers, setAnswers] = useState([]);
  const [isClicked, setIsClicked] = useState(false);
  const [isClickedCorrect, setIsClickedCorrect] = useState(false);
  const [isClickedIncorrect, setIsClickedIncorrect] = useState(false);
  const [points, setPoints] = useState(0);
  const [secondsLeft, setSecondsLeft] = useState(15);

  useEffect(function getRandomQuestionAndAnswers() {
    let randomQuestionIndex = Math.floor(
      Math.random() * MathsQuestions().length
    );
    let randomQuestionAndAnswers = MathsQuestions()[randomQuestionIndex];
    setQuestion(randomQuestionAndAnswers.Question);
    setAnswers(randomQuestionAndAnswers.Answers);
  }, []);

  function handleClickIncorrect() {
    if (!isClicked) {
      setIsClicked(true);
      setIsClickedIncorrect(true);
    }
  }

  function handleClickCorrect() {
    if (!isClicked) {
      setIsClicked(true);
      setPoints((5 + secondsLeft) * 5);
      setIsClickedCorrect(true);
      props.addToScore((5 + secondsLeft) * 5);
    }
    setTimeout(props.newQuestion(), 3000);
  }

  function calculateSecondsLeft(seconds) {
    setSecondsLeft(seconds);
  }

  return (
    <Container maxWidth="md">
      <Timer
        calculateSecondsLeft={calculateSecondsLeft}
        isClicked={isClicked}
        resetSneakySeconds={props.resetSneakySeconds}
      />
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
                    fullWidth={true}
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
                    fullWidth={true}
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
            Correct! You got {points} points
          </Typography>
        ) : isClickedIncorrect ? (
          <Typography variant="h3" align="center" gutterBottom marginTop={"5%"}>
            Incorrect... Unluckyyy
          </Typography>
        ) : secondsLeft === 0 ? (
          <Typography variant="h3" align="center" gutterBottom marginTop={"5%"}>
            You ran out of time... Unluckyyy
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
