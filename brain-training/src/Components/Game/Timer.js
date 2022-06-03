import { useState } from "react";

export default function Timer(props) {
  const [seconds, setSeconds] = useState(15);

  function countdownTimer() {
    for (let i = 0; i < 15; i++) {
      if (seconds > 0) {
        setTimeout(() => {
          setSeconds(seconds - 1);
        }, 1000);
      }
    }
  }

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
      <h3 style={{ color: timerColour, fontSize: "250%" }}>{seconds}</h3>
    </div>
  );
}

// -Timer
//     -Starts timer for when answers come up
//     - ~15 seconds timer for each Q?
//     -Counts down and displays time remaining
//     -5 seconds left = turns red
