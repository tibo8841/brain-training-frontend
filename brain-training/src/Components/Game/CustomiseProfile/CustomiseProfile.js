import { React, useState, useEffect } from "react";
import { Avatar } from "@mui/material";
import CollapsibleAvatarList from "./CollapsibleAvatarList";
import UserCurrentAvatar from "./UserCurrentAvatar";
import UserWinMessage from "./UserWinMessage";

export default function CustomiseProfile() {
  const [userAvatar, setUserAvatar] = useState(
    "/static/media/blueCar.3e6bc083ed4e8b29e3cc.jpg"
  );

  return (
    <div>
      <h1> Customise your profile! </h1>
      <UserCurrentAvatar selectedAvatar={userAvatar} />
      <UserWinMessage />
      <CollapsibleAvatarList
        handleChosenAvatarClick={(chosenAvatarSrc) => {
          setUserAvatar(chosenAvatarSrc);
        }}
      />
    </div>
  );
}

/*
Create a drop down menu of possible avatars
  - find pictures of possible avatars - done 
  - upload folder of possible avatars to use source links - done 
    - find out how to upload the pictures folder into the App - done 
  - create a drop down menu displaying the pictures of the avatars
    - how to make the list collapse - done 
    - how to put the avatars in the content - done 
    - how to put images in the content - done 
    - how to select the images - done
  - Be able to select a option
    - When user clicks an option, the character should display on in a frame
      - create a frame 
      - create onClick for the option
      - find out how to render it into a frame 

  Make an avatar display 
    - the users avatar should be in a frame 
      - create a container
      - insert chosen avatar in to the container
      - add boarder to container 
    
  - Avatar will be stored in database 
    - create a state
    - create a useEffect to update the picture 
*/

// - can change your profile picture, choose from ~16 options
// - can choose colour for your name to be displayed
// - can set a custom win Message to be displayed if you win
// - can add crown to your picture if you have won a game before
