import { React, useState } from "react";
import { Container } from "@mui/material";
import CollapsibleAvatarList from "./CollapsibleAvatarList";
import UserCurrentAvatar from "./UserCurrentAvatarDisplay";
import UserWinMessageDisplay from "./UserWinMessageDisplay";
import UserWinMessageForm from "./UserWinMessageForm";

export default function CustomiseProfile() {
  const [userAvatar, setUserAvatar] = useState(
    "/static/media/Avatar1.3a808b587ef8820a42e5.png"
  );
  const [userWinMessage, setUserWinMessage] = useState("I win!");

  function handleChosenAvatarClick(selectedAvatarSrc) {
    setUserAvatar(selectedAvatarSrc);
  }

  function updateUsersWinMessage(usersUpdatedMessage) {
    setUserWinMessage(usersUpdatedMessage);
  }

  return (
    <div>
      <Container align="center">
        <h1> Customise your profile! </h1>
        <UserCurrentAvatar
          selectedAvatar={userAvatar}
          handleChosenAvatarClick={handleChosenAvatarClick}
        />
        <UserWinMessageDisplay userWinMessage={userWinMessage} />
        <CollapsibleAvatarList
          handleChosenAvatarClick={handleChosenAvatarClick}
        />
        <UserWinMessageForm updateUsersWinMessage={updateUsersWinMessage} />
      </Container>
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
  
  - Save all changes button
    - create a button 
    - write fetch requests to get changes. 
*/

// - can change your profile picture, choose from ~16 options
// - can choose colour for your name to be displayed
// - can set a custom win Message to be displayed if you win
// - can add crown to your picture if you have won a game before
