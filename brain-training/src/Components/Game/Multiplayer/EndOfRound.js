import ScoreDisplay from "../ScoreDisplay";
import Chat from "./Chat";
export default function EndOfRound() {
  function timeOnPage() {}
  function playerScores() {}
  function checkEliminated() {}
  return (
    <div>
      <div>
        <ScoreDisplay />
      </div>
      <div>Eliminated Players</div>
      <div>
        <Chat />
      </div>
    </div>
  );
}

// -EndOfRound
//     -At end of round, display some scores
//     -Display who is getting eliminated
//     -If you are eliminated, take you to EliminationScreen
//     -Display Chat component
//     -Take you back to game after ~20 seconds
