import React from "react";
import { Container, Box, Avatar } from "@mui/material";

export default function UserCurrentAvatarDisplay(props) {
  // async function fetchUserProfilePicture() {
  //   const user = await getProfile();
  //   const user = user.user.win_message;
  //   return userWinMessage;
  // }

  function showAvatar() {
    if (props.isNewAvatar) {
      return (
        <Avatar
          sx={{ height: "300px", width: "300px" }}
          src={props.selectedAvatar}
        />
      );
    } else {
      return (
        <Avatar
          sx={{ height: "300px", width: "300px" }}
          src={props.getAvatarLink(props.originalAvatarID)}
        />
      );
    }
  }

  return (
    <Container align="center">
      <Box align="center" sx={{ justifyContent: "space-between" }}></Box>
      {showAvatar()}
      <Box align="center"></Box>
    </Container>
  );
}
