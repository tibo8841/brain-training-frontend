import React, { useState } from "react";
import {
  Avatar,
  Collapse,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Box,
  Container,
} from "@mui/material";
import blueCar from "../../../AvatarsPictures/blueCar.jpg";
import blueHelicopter from "../../../AvatarsPictures/blueHelicopter.jpg";
import blueTrain from "../../../AvatarsPictures/blueTrain.jpg";
import blueTram from "../../../AvatarsPictures/blueTram.jpg";
import greenCar from "../../../AvatarsPictures/greenCar.jpg";
import greenTram from "../../../AvatarsPictures/greenTram.jpg";
import orangeTram from "../../../AvatarsPictures/orangeTram.jpg";
import pinkHelicopter from "../../../AvatarsPictures/pinkHelicopter.jpg";
import pinkTrain from "../../../AvatarsPictures/pinkTrain.jpg";
import redBus from "../../../AvatarsPictures/redBus.jpg";
import yellowCar from "../../../AvatarsPictures/yellowCar.jpg";

export default function CollapsibleAvatarList(props) {
  const [isOpen, setIsOpen] = useState(false);

  const avatarOptions = [
    { alt: "Blue car", src: blueCar },
    { alt: "Blue helicopter", src: blueHelicopter },
    { alt: "Blue train", src: blueTrain },
    { alt: "Blue Tram", src: blueTram },
    { alt: "Green car", src: greenCar },
    { alt: "Green tram", src: greenTram },
    { alt: "Orange tram", src: orangeTram },
    { alt: "Pink helicopter", src: pinkHelicopter },
    { alt: "Pink train", src: pinkTrain },
    { alt: "Red bus", src: redBus },
    { alt: "Yellow car", src: yellowCar },
  ];

  function collapsibleAvatarlist(props) {
    return (
      <Collapse in={isOpen}>
        <List sx={{ width: 300, background: "grey" }}>
          {avatarOptions.map((avatar, index) => (
            <ListItem key={index}>
              <ListItemButton
                onClick={(event) => {
                  event.preventDefault();
                  let selectedAvatarSrc = avatar.src;
                  props.handleChosenAvatarClick(selectedAvatarSrc);
                }}
              >
                {avatar.alt}
                <ListItemText>{<Avatar src={avatar.src} />}</ListItemText>
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Collapse>
    );
  }
  // make function to create buttons outside of return statement
  // map the returns element individually, and replace with function
  // each element should have a unique key.
  return (
    <div>
      <List sx={{ width: 300 }}>
        <ListItem>
          <ListItemButton onClick={() => setIsOpen(!isOpen)}>
            <ListItemIcon>{"v"}</ListItemIcon>
            <ListItemText primary={"Choose your Avatar."}></ListItemText>
          </ListItemButton>
        </ListItem>
      </List>
      {collapsibleAvatarlist()}
      <Container align="center">
        <Box align="center" sx={{ justifyContent: "space-between" }}></Box>
        <h2> This is a centered box </h2>
        <Box align="center"></Box>
      </Container>
    </div>
  );
}

/*
Task: When user selects their avatar, then the avatar should display.
  - Create a frame/ div of where the selected avatar swill render 
  - create onClick handle functions that displays the selected avatar into the frame  
   


*/
