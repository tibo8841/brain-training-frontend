import Button from "@mui/material/Button";

export default function QuestionsAndAnswers() {
  function handleClick(e) {}

  return (
    <div>
      <div>
        <header>Question:</header>
      </div>
      <div>
        <Button variant="contained" onClick={handleClick}>
          Answer 1
        </Button>
        <Button variant="contained" onClick={handleClick}>
          Answer 2
        </Button>
        <Button variant="contained" onClick={handleClick}>
          Answer 3
        </Button>
        <Button variant="contained" onClick={handleClick}>
          Answer 4
        </Button>
      </div>
    </div>
  );
}

// -QuestionsAndAnswers
//     -Shows Question for couple seconds
//     -After Shows 4 answer option buttons
//     -One correct answer
//     -Answer goes green if you are correct
//     -Goes red if incorrect
//     -Hovering over changes colour slightly
