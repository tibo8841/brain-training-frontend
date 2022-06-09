import React from "react";
import { Container, Box, Avatar } from "@mui/material";
import { getProfile } from "../../Networking";

export default function UserCurrentAvatar(props) {
  async function fetchUserAvatar() {
    const user = await getProfile();
    const userAvatar = user.userAvatarId;
    return userAvatar;
  }
  return (
    <Container align="center">
      <Box align="center" sx={{ justifyContent: "space-between" }}></Box>
      <Avatar
        sx={{ height: "300px", width: "300px" }}
        src={fetchUserAvatar()}
      />
      <Box align="center"></Box>
    </Container>
  );
}
