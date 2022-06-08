import React, { useState } from "react";
import AvatarOptions from "../CustomiseProfile/AvatarOptions";

import {
  Collapse,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Box,
  Container,
  ImageList,
  ImageListItem,
} from "@mui/material";

export default function CollapsibleAvatarList(props) {
  const [isOpen, setIsOpen] = useState(false);

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
          <List sx={{ width: 300, background: "light bl" }}>
            <ImageList
              sx={{ width: 500, height: 450 }}
              cols={3}
              rowHeight={164}
            >
              {AvatarOptions().map((avatar, index) => (
                <ImageListItem key={index}>
                  <img
                    onClick={(event) => {
                      props.handleChosenAvatarClick(avatar.src);
                      console.log(event.target);
                    }}
                    style={{ cursor: "pointer" }}
                    src={`${avatar.src}?w=164&h=164&fit=crop&auto=format`}
                    srcSet={`${avatar.src}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                    alt={avatar.title}
                    loading="loading..."
                  />
                </ImageListItem>
              ))}
            </ImageList>
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
