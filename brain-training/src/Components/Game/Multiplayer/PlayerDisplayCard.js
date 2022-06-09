import { useState } from "react";
import { Box, Container } from "@mui/system";
import Avatar from "@mui/material/Avatar";
import { checkSessions, getProfile } from "../../Networking";
import AvatarOption from "../CustomiseProfile/AvatarOptions";

export default function PlayerDisplayCard() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [avatarID, setAvatarID] = useState(1);

  async function checkLogin() {
    let auth = await checkSessions();
    if (auth === true) {
      setIsAuthenticated(true);
    }
  }

  function getAvatarLink(avatarID) {
    let chosenAvatar = AvatarOption().find((avatar) => avatar.id === avatarID);
    console.log(chosenAvatar.link);
    console.log("above is link");
    return chosenAvatar.link;
  }

  async function fetchAvatar() {
    if (isAuthenticated) {
      const user = await getProfile();
      setAvatarID(user.user.profile_picture_id);
    }
  }

  checkLogin();
  fetchAvatar();
  getAvatarLink(avatarID);

  async function fetchProfileUsername() {
    const profile = await getProfile(2);
    return profile.user.username;
  }

  // async function fetchWinMessage() {
  //   const profile = await getProfile(2);
  //   return profile.user.win_message;
  //  {`${fetchProfilePicture()} ${fetchProfileUsername()} `}
  // }
  // <Box sx={{ justifyContent: "space-between", width: 300, height: 200 }}> </Box>
  return (
    <div>
      <Container>
        <Avatar src={getAvatarLink(avatarID)} />
      </Container>
    </div>
  );
}
