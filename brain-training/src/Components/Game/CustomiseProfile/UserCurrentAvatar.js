import React, { useState } from "react";
import { Container, Box, Avatar } from "@mui/material";
import CollapsibleAvatarList from "./CollapsibleAvatarList";
import blueCar from "../../../AvatarsPictures/blueCar.jpg";

export default function UserCurrentAvatar(props) {
  return (
    <Container align="center">
      <Box align="center" sx={{ justifyContent: "space-between" }}></Box>
      <Avatar src={props.userAvatar} />
      <Box align="center"></Box>
    </Container>
  );
}
