import QuestionsAndAnswers from "../QuestionsAndAnswers";
import Timer from "../Timer";
import ScoreDisplay from "../ScoreDisplay";

export default function MultiplayerGame() {
  function loadQuestion() {}
  return (
    <div>
      <div>
        <Timer />
        <ScoreDisplay />
      </div>
      <div>
        <QuestionsAndAnswers />
      </div>
    </div>
  );
}

//  -Display QuestionAndAnswers component
//     -Display Question first, then after some seconds
//      display options to answer with
//     -Start timer component when answer options display
//     -Display users current score
//     -Quicker you answer = more points
//     -at end of round take you to EndOfRound screen
//     -At end of game display MultiplayerResults
//     -Uses websockets
//     -Game sound?
