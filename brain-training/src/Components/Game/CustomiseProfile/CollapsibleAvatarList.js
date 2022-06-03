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
  const [userAvatar, setUserAvatar] = useState({ blueCar });
  function handleChosenAvatarClick() {}
  const avatarOptions = [
    { key: 1, alt: "Blue car", src: blueCar },
    { key: 2, alt: "Blue helicopter", src: blueHelicopter },
    { key: 3, alt: "Blue train", src: blueTrain },
    { key: 4, alt: "Blue Tram", src: blueTram },
    { key: 5, alt: "Green car", src: greenCar },
    { key: 6, alt: "Green tram", src: greenTram },
    { key: 7, alt: "Orange tram", src: orangeTram },
    { key: 8, alt: "Pink helicopter", src: pinkHelicopter },
    { key: 9, alt: "Pink train", src: pinkTrain },
    { key: 10, alt: "Red bus", src: redBus },
    { key: 11, alt: "Yellow car", src: yellowCar },
  ];
  // make function to create buttons outside of return statement
  // map the returns element individually, and replace with function
  // each element should have a unique key.
  return (
    <div>
      <List sx={{ width: 300 }}>
        <listItem>
          <ListItemButton onClick={() => setIsOpen(!isOpen)}>
            <ListItemIcon>{"v"}</ListItemIcon>
            <ListItemText primary={"Choose your Avatar."}></ListItemText>
          </ListItemButton>
        </listItem>
      </List>
      <Collapse in={isOpen}>
        <List sx={{ width: 300, background: "grey" }}>
          {avatarOptions.map((avatar) => (
            <ListItem key={avatar.key}>
              <ListItemButton
                onClick={(event) => console.log(event.target.key)}
              >
                {avatar.alt}
                <ListItemText>{<Avatar src={avatar.src} />}</ListItemText>
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Collapse>

      <Container align="center">
        <Box align="center" sx={{ justifyContent: "space-between" }}></Box>
        <h2> hello</h2>
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
