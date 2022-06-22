import { useState } from "react";

export default function Timer(props) {
  const [seconds, setSeconds] = useState(15);
  const [sneakySeconds, setSneakySeconds] = useState(20);

  function countdownTimer() {
    for (let i = 0; i < 15; i++) {
      if (seconds > 0) {
        setTimeout(() => {
          setSeconds(seconds - 1);
        }, 1000);
      }
    }
  }

  function sneakyTimer() {
    for (let i = 0; i < 20; i++) {
      if (sneakySeconds > 0) {
        setTimeout(() => {
          setSneakySeconds(sneakySeconds - 1);
        }, 1000);
      }
    }
    if (sneakySeconds === 0) {
      props.resetSneakySeconds();
    }
  }

  sneakyTimer();

  props.calculateSecondsLeft(seconds);

  let timerColour = "black";

  if (seconds < 6 && seconds > 3) {
    timerColour = "#ed8439";
  }

  if (seconds < 4) {
    timerColour = "#ed1313";
  }

  if (props.isClicked === false) {
    countdownTimer();
  }

  return (
    <div>
      <h4 style={{ color: timerColour, fontSize: "200%" }}>{seconds}</h4>
      <h6>next question in {sneakySeconds}</h6>
    </div>
  );
}

// -Timer
//     -Starts timer for when answers come up
//     - ~15 seconds timer for each Q?
//     -Counts down and displays time remaining
//     -5 seconds left = turns red
