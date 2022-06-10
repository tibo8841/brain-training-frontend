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
  const [startPlay, setStartPlay] = useState(false);
  const [userList, setUserList] = useState([]);
  const [avatarID, setAvatarID] = useState(1);

  async function joinRoom() {
    await socket.emit("join_room", { username: username, room: room });
  }

  useEffect(() => {
    console.log("joining room");
    getUsername();
    addToUserList();
  }, []);

  useEffect(() => {
    addToUserList();
    joinRoom();
  }, [username]);

  // useEffect(() => {
  //   console.log(username);
  //   console.log("above is username");
  //   socket.on("join_room", (data) => {
  //     console.log(data);
  //     console.log("above is data");
  //     setUserList([...userList, data]);
  //   });
  //   console.log(userList);
  //   console.log("above is user list");
  // }, [userList]);

  useEffect(() => {
    addToUserList();
  }, [userList]);

  function addToUserList() {
    console.log(username);
    console.log("above is username");
    socket.on("join_room", (data) => {
      console.log(data);
      console.log("above is data");
      setUserList([...userList, data]);
    });
    console.log(userList);
    console.log("above is user list");
  }

  async function checkLogin() {
    let auth = await checkSessions();
    if (auth === true) {
      setIsAuthenticated(true);
    }
  }

  async function getUsername() {
    checkLogin();
    if (isAuthenticated) {
      let profile = await getProfile();
      setUsername(profile.user.username);
    }
  }

  getUsername();

  let navigate = useNavigate();

  function startGame() {
    setStartPlay(true);
    sendPlay(true);
    navigate("/lobby/play");
  }

  async function sendPlay(ready) {
    await socket.emit("send_play", { ready: ready });
  }

  useEffect(() => {
    socket.on("receive_play", (data) => {
      console.log(data);
      startGame();
    });
  }, [socket, startPlay]);

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
            <Chat room={room} username={username} socket={socket} />
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
