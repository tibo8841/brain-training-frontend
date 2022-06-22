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
      if (secondsLeft === 0) {
        return;
      }
      setIsClicked(true);
      setIsClickedIncorrect(true);
      props.handleMusicClick();
    }
  }

  function handleClickCorrect() {
    if (!isClicked) {
      if (secondsLeft === 0) {
        return;
      } else {
        setIsClicked(true);
        setPoints((5 + secondsLeft) * 5);
        setIsClickedCorrect(true);
        props.addToScore((5 + secondsLeft) * 5);
        props.handleMusicClick();
      }
    }
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
        gameType={props.gameType}
      />
      <Box mt={"3%"}>
        <Typography variant="h3" align="center" gutterBottom>
          {question}
        </Typography>
        <Grid container spacing={3}>
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
                      padding: "3%",
                      fontSize: "200%",
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
                      padding: "3%",
                      fontSize: "200%",
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
          <Typography variant="h3" align="center" gutterBottom marginTop={"2%"}>
            Correct! You got {points} points
          </Typography>
        ) : isClickedIncorrect ? (
          <Typography variant="h3" align="center" gutterBottom marginTop={"2%"}>
            Incorrect... Unluckyyy
          </Typography>
        ) : secondsLeft === 0 ? (
          <Typography variant="h3" align="center" gutterBottom marginTop={"2%"}>
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
