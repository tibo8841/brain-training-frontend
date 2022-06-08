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

import avatar1 from "../../../avatars/Avatar1.png";
import avatar2 from "../../../avatars/Avatar2.png";
import avatar3 from "../../../avatars/Avatar3.png";
import avatar4 from "../../../avatars/Avatar4.png";
import avatar5 from "../../../avatars/Avatar5.png";
import avatar6 from "../../../avatars/Avatar6.png";
import avatar7 from "../../../avatars/Avatar7.png";
import avatar8 from "../../../avatars/Avatar8.png";
import avatar9 from "../../../avatars/Avatar9.png";
import avatar10 from "../../../avatars/Avatar10.png";
import avatar11 from "../../../avatars/Avatar11.png";
import avatar12 from "../../../avatars/Avatar12.png";
import avatar13 from "../../../avatars/Avatar13.png";
import avatar14 from "../../../avatars/Avatar14.png";

export default function CollapsibleAvatarList(props) {
  const [isOpen, setIsOpen] = useState(false);

  const avatarOptions = [
    { alt: "Green dude ", src: avatar1 },
    { alt: "Red dude ", src: avatar2 },
    { alt: "Blue dude ", src: avatar3 },
    { alt: "Yellow dude ", src: avatar4 },
    { alt: "Green dude ", src: avatar5 },
    { alt: "Blue glasses dude ", src: avatar6 },
    { alt: "Pink dude ", src: avatar7 },
    { alt: "Purple dude ", src: avatar8 },
    { alt: "Green lashes dude ", src: avatar9 },
    { alt: "Yellow scared dude ", src: avatar10 },
    { alt: "Purple glasses dude ", src: avatar11 },
    { alt: "Pink cheeky dude ", src: avatar12 },
    { alt: " Super cheeky dude ", src: avatar13 },
    { alt: "Super duper cheeky dude ", src: avatar14 },
  ];

  return (
    <div>
      <Container align="center">
        <List sx={{ width: 300 }}>
          <ListItem>
            <ListItemButton onClick={() => setIsOpen(!isOpen)}>
              <ListItemIcon>{"v"}</ListItemIcon>
              <ListItemText primary={"Choose your Avatar."}></ListItemText>
            </ListItemButton>
          </ListItem>
        </List>
        <Collapse in={isOpen}>
          <List sx={{ width: 300, background: "grey" }}>
            {avatarOptions.map((avatar, index) => (
              <ListItem key={index} id={index}>
                <ListItemButton
                  onClick={(event) => props.handleChosenAvatarClick(avatar.src)}
                >
                  {avatar.alt}
                  <ListItemText>{<Avatar src={avatar.src} />}</ListItemText>
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Collapse>
        <Box align="center" sx={{ justifyContent: "space-between" }}></Box>
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
