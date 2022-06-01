import React, { useState } from "react";
import {
  Avatar,
  Collapse,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
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
  //const [userAvatar, setUserAvatar] = useState({ blueCar });
  //Task: When user selects their avatar, then the avatar should display.
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
            <ListItem divider>
              <ListItemButton
                onClick={() => console.log(`${avatar.alt} was clicked`)}
              >
                {avatar.alt}
                <ListItemText>{<Avatar src={avatar.src} />}</ListItemText>
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Collapse>
    </div>
  );
}
