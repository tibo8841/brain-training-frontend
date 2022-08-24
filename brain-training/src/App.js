import { Routes, Route } from "react-router-dom";
import CustomiseProfile from "./Components/Game/CustomiseProfile/CustomiseProfile";
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
import Header from "./Components/Header";
import { useState } from "react";

export default function App() {
  const [user, setUser] = useState("");
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="login" element={<Login setUser={setUser} user={user} />} />
        <Route path="register" element={<Registration />} />
        <Route path="how+to+play" element={<HowToPlay />} />
        <Route path="leaderboard" element={<Leaderboard />} />
        <Route path="profile" element={<CustomiseProfile user={user} />} />
        <Route path="play" element={<SingleplayerGame user={user} />} />
        <Route path="play/results" element={<SingleplayerResults />} />
        <Route path="lobby" element={<Lobby user={user} />} />
        <Route path="lobby/play" element={<MultiplayerGame user={user} />} />
        <Route
          path="lobby/play/results"
          element={<MultiplayerResults user={user} />}
        />
      </Routes>
      {/* <h1>Brain training</h1>
      <img
        style={{ height: "70vh" }}
        alt="Dr. Alex brain train"
        src="/Screenshot 2022-05-30 at 11.49.21.png"
      ></img> */}
    </div>
  );
}
