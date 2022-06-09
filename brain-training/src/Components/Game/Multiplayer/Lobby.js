import { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import Chat from "./Chat";
import { useNavigate } from "react-router-dom";
import { getProfile, checkSessions } from "../../Networking";
import {
  Container,
  Typography,
  Box,
  Grid,
  List,
  ListItem,
  ListItemText,
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
  socket.emit("join_room", { username, room });

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
    socket.emit("send_play", { startPlay });
    navigate("/lobby/play");
  }

  const [copiedLobbyLink, setCopiedLobbyLink] = useState();
  return (
    <Container sx={{ width: "80%" }}>
      <Box align="center" marginBottom={"1%"}>
        <CopyToClipboard
          text={"https://brain-training-website.sigmalabs.co.uk/lobby"}
          //put real link in text above
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
          <Grid item xs={8} component={Box}>
            {/* render below conditionally based on if lobby is full, if is full say "ready to start" instead */}
            <Typography variant="h4">
              Waiting for lobby to fill...{"  "}
              <CircularProgress color="secondary" size={30} />
            </Typography>
          </Grid>
          <Grid item xs={4} component={Box}>
            <Typography variant="h4">A: 7/16</Typography>
          </Grid>
        </Grid>
        <Grid container spacing={2} marginTop={"1%"}>
          <Grid item xs={5} component={Box}>
            <Typography align="center" variant="h5">
              Players in Lobby
            </Typography>
            <List
              sx={{ overflow: "auto", position: "relative", maxHeight: "70%" }}
            >
              <ListItem sx={{ marginBottom: "2%" }}>
                <ListItemText align="center">Alex</ListItemText>
              </ListItem>
              <ListItem sx={{ marginBottom: "2%" }}>
                <ListItemText align="center">Kamilah</ListItemText>
              </ListItem>
              <ListItem sx={{ marginBottom: "2%" }}>
                <ListItemText align="center">
                  Player Profile component would go here, with picture and stuff
                </ListItemText>
              </ListItem>
              <ListItem sx={{ marginBottom: "2%" }}>
                <ListItemText align="center">
                  It would also be a scrolly list
                </ListItemText>
              </ListItem>
              <ListItem sx={{ marginBottom: "2%" }}>
                <ListItemText align="center">
                  It would also be a scrolly list
                </ListItemText>
              </ListItem>
              <ListItem sx={{ marginBottom: "2%" }}>
                <ListItemText align="center">
                  It would also be a scrolly list
                </ListItemText>
              </ListItem>
              <ListItem sx={{ marginBottom: "2%" }}>
                <ListItemText align="center">
                  It would also be a scrolly list
                </ListItemText>
              </ListItem>
              <ListItem sx={{ marginBottom: "2%" }}>
                <ListItemText align="center">
                  It would also be a scrolly list
                </ListItemText>
              </ListItem>
            </List>
          </Grid>
          <Grid item xs={7} component={Box}>
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
