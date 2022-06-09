import { useState, useEffect } from "react";
import { Container } from "@mui/system";
import Avatar from "@mui/material/Avatar";
import { checkSessions } from "../../Networking";
import { getProfile } from "../../Networking";
import AvatarOption from "../CustomiseProfile/AvatarOptions";

export default function PlayerDisplayCard() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [avatarID, setAvatarID] = useState(1);
  const [userUsername, setUserUsername] = useState("");

  async function checkLogin() {
    let auth = await checkSessions();
    if (auth === true) {
      setIsAuthenticated(true);
    }
  }

  function getAvatarLink(avatarID) {
    let chosenAvatar = AvatarOption().find((avatar) => avatar.id === avatarID);
    return chosenAvatar.link;
  }

  async function fetchAvatar() {
    if (isAuthenticated) {
      const user = await getProfile();
      setAvatarID(user.user.profile_picture_id);
    }
  }
  async function fetchProfileUsername() {
    if (isAuthenticated) {
      const user = await getProfile();
      const userName = user.user.username;
      setUserUsername(userName);
    }
  }

  checkLogin();
  fetchAvatar();
  getAvatarLink(avatarID);
  fetchProfileUsername();

  // async function fetchWinMessage() {

  // <Box sx={{ justifyContent: "space-between", width: 300, height: 200 }}> </Box>
  return (
    <div>
      <Container>
        <Avatar src={getAvatarLink(avatarID)} />
        {userUsername}
      </Container>
    </div>
  );
}
