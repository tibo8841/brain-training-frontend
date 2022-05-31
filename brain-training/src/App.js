import { Routes, Route } from "react-router-dom";
import CustomiseProfile from "./Components/CustomiseProfile";
import HomePage from "./Components/HomePage";
import Login from "./Components/Login";
import Registration from "./Components/Registration";
import HowToPlay from "./Components/HowToPlay";
import Leaderboard from "./Components/Leaderboard";
import SingleplayerGame from "./Components/Game/SingleplayerGame";
import Lobby from "./Components/Game/Multiplayer/Lobby";
import SingleplayerResults from "./Components/Game/SingleplayerResults";
import MultiplayerGame from "./Components/Game/Multiplayer/MultiplayerGame";
import MultiplayerResults from "./Components/Game/Multiplayer/MultiplayerResults";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Registration />} />
        <Route path="how+to+play" element={<HowToPlay />} />
        <Route path="leaderboard" element={<Leaderboard />} />
        <Route path="profile" element={<CustomiseProfile />} />
        <Route path="play" element={<SingleplayerGame />} />
        <Route path="play/results" element={<SingleplayerResults />} />
        <Route path="lobby" element={<Lobby />} />
        <Route path="lobby/play" element={<MultiplayerGame />} />
        <Route path="lobby/play/results" element={<MultiplayerResults />} />
      </Routes>
      <h1>Brain training</h1>
      <img
        style={{ height: "70vh" }}
        alt="Dr. Alex brain train"
        src="/Screenshot 2022-05-30 at 11.49.21.png"
      ></img>
    </div>
  );
}

export default App;
