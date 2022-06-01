import { React, useState, useEffect } from "react";
import CollapsibleAvatarList from "./CollapsibleAvatarList";
import UserCurrentAvatar from "./UserCurrentAvatar";
import UserWinMessage from "./UserWinMessage";

export default function CustomiseProfile() {
  const [userWinMessage, setUserWinMessage] = useState("I win!");
  useEffect(() => {
    async function fetchUserWinMessage() {
      const userWinMessage =
        await "insert fetch request through networking to get win message";
      setUserWinMessage(userWinMessage);
    }
    fetchUserWinMessage();
  }, []);

  return (
    <div>
      <h1> Customise your profile! </h1>
      <UserCurrentAvatar />
      <UserWinMessage />
      <CollapsibleAvatarList />
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
    - how to put the avatars in the content 
    - how to put images in the content 
    - how to select the images 

  Make an avatar display 
    - the users avatar should be in a frame 
    
  - Avatar will be stored in database 
    - create a state
    - create a useEffect to update the picture 
*/

// - can change your profile picture, choose from ~16 options
// - can choose colour for your name to be displayed
// - can set a custom win Message to be displayed if you win
// - can add crown to your picture if you have won a game before
