import { useState, useEffect } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import Chat from "./Chat";
import { useNavigate } from "react-router-dom";
import { getProfile, checkSessions } from "../../Networking";
import {
  Container,
  Typography,
  Box,
  Grid,
  CircularProgress,
  Tooltip,
  Button,
} from "@mui/material";

import io from "socket.io-client";

const socket = io.connect(
  "https://brain-training-multiplayer.sigmalabs.co.uk/"
);

const room = 1234;

export default function Lobby() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState("username");
  const [avatarID, setAvatarID] = useState(1);

  socket.emit("join_room", { username: username, room: room });

  async function checkLogin() {
    let auth = await checkSessions();
    if (auth === true) {
      setIsAuthenticated(true);
    }
  }

  async function getUserInfo() {
    checkLogin();
    if (isAuthenticated) {
      let profile = await getProfile();
      setUsername(profile.user.username);
      setAvatarID(profile.user.profile_picture_id);
    }
  }

  getUserInfo();

  let navigate = useNavigate();

  function startGame() {
    sendPlay(true);
    navigate("/lobby/play");
  }

  function navigateToGame() {
    navigate("/lobby/play");
  }

  async function sendPlay(ready) {
    await socket.emit("send_play", { ready: ready });
  }

  socket.on("receive_play", (data) => {
    navigateToGame();
  });

  const [copiedLobbyLink, setCopiedLobbyLink] = useState();
  return (
    <Container sx={{ width: "80%" }}>
      <Box align="center" marginBottom={"1%"}>
        <CopyToClipboard
          text={"https://brain-training-website.sigmalabs.co.uk/lobby"}
          onCopy={() => setCopiedLobbyLink("Lobby-Link")}
        >
          <Tooltip
            title={
              copiedLobbyLink === "Lobby-Link"
                ? "This was Copied!"
                : "Copy To Clipboard"
            }
            placement="top"
          >
            <Box
              component="button"
              data-clipboard-text="album-2"
              type="button"
              fontFamily="inherit"
              fontSize="16px"
              fontWeight="400"
              lineHeight="1.25"
              display="inline-block"
              width="100%"
              margin=".5rem 0"
              padding="1%"
            >
              <div>
                <i className="Lobby-Link-Here" />
                <span>Click to copy link to the lobby</span>
              </div>
            </Box>
          </Tooltip>
        </CopyToClipboard>
      </Box>
      <Box align="center" textAlign={"center"}>
        <Button onClick={startGame} variant="contained">
          Start Game for everyone!
        </Button>
      </Box>
      <Box sx={{ flexGrow: 1, marginTop: "2%" }}>
        <Grid container spacing={2}>
          <Grid item xs={12} component={Box}>
            {/* render below conditionally based on if lobby is full, if is full say "ready to start" instead */}
            <Typography variant="h4">
              Wait for your friends before starting game, chat below while you
              wait..{"  "}
              <CircularProgress color="secondary" size={30} />
            </Typography>
          </Grid>
        </Grid>
        <Grid container spacing={2} marginTop={"1%"}>
          <Grid item xs={12} component={Box}>
            <Chat
              room={room}
              username={username}
              socket={socket}
              avatarID={avatarID}
            />
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}

// -Lobby
//     -Will have Chat component, for players to
//      chat while they wait
//     -Will have PlayerDisplay component for each
//      player in lobby
//     -Will display lobby code for others to join
//     -Will have start game button
//     -Lobby music?
//     -Lobby waiting animation?
