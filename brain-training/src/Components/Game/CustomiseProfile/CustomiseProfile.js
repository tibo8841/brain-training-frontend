import { React, useState } from "react";
import { Container, Button } from "@mui/material";
import CollapsibleAvatarList from "./CollapsibleAvatarList";
import UserCurrentAvatarDisplay from "./UserCurrentAvatarDisplay";
import UserWinMessageDisplay from "./UserWinMessageDisplay";
import UserWinMessageForm from "./UserWinMessageForm";
import { updateWinMessage } from "../../Networking";
import { updateProfilePicture } from "../../Networking";
import { getProfile, checkSessions } from "../../Networking";
import AvatarOption from "./AvatarOptions";

export default function CustomiseProfile() {
  const [userAvatarId, setUserAvatarId] = useState(1);
  const [userWinMessage, setUserWinMessage] = useState("");
  const [userAvatar, setUserAvatar] = useState(
    "/static/media/Avatar1.3a808b587ef8820a42e5.png"
  );
  const [originalWinMessage, setOriginalWinMessage] = useState("");
  const [originalAvatarID, setOriginalAvatarID] = useState(1);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isNewWinMessage, setIsNewWinMessage] = useState(false);
  const [isNewAvatar, setIsNewAvatar] = useState(false);

  async function checkLogin() {
    let auth = await checkSessions();
    if (auth === true) {
      setIsAuthenticated(true);
    }
  }

  async function fetchUserWinMessage() {
    if (isAuthenticated) {
      const user = await getProfile();
      setOriginalWinMessage(user.user.win_message);
    }
  }

  checkLogin();
  fetchUserWinMessage();
  fetchOriginalAvatar();

  function getAvatarLink(avatarID) {
    let chosenAvatar = AvatarOption().find((avatar) => avatar.id === avatarID);
    //console.log(chosenAvatar.link);
    // console.log("above is link");
    return chosenAvatar.link;
  }

  async function fetchOriginalAvatar() {
    if (isAuthenticated) {
      const user = await getProfile();
      setOriginalAvatarID(user.user.profile_picture_id);
    }
  }

  function handleChosenAvatarClick(selectedAvatarSrc, selectedAvatarid) {
    setIsNewAvatar(true);
    setUserAvatar(selectedAvatarSrc);
    setUserAvatarId(selectedAvatarid);
  }

  function updateUsersWinMessage(usersUpdatedMessage) {
    setIsNewWinMessage(true);
    setUserWinMessage(usersUpdatedMessage);
  }

  function handleSaveMessage() {
    updateWinMessage(userWinMessage);
    window.location.reload(false);
  }

  function handleSaveAvatar() {
    updateProfilePicture(userAvatarId);
    window.location.reload(false);
  }

  return (
    <div>
      <Container align="center">
        <h1> Customise your profile! </h1>
        <UserCurrentAvatarDisplay
          isNewAvatar={isNewAvatar}
          selectedAvatar={userAvatar}
          getAvatarLink={getAvatarLink}
          originalAvatarID={originalAvatarID}
        />
        <h2> My win message: </h2>
        <UserWinMessageDisplay
          isNewWinMessage={isNewWinMessage}
          userWinMessage={userWinMessage}
          originalWinMessage={originalWinMessage}
        />
        <CollapsibleAvatarList
          handleChosenAvatarClick={handleChosenAvatarClick}
        />
        <Button onClick={handleSaveAvatar}>save avatar</Button>
        <UserWinMessageForm updateUsersWinMessage={updateUsersWinMessage} />
        <Button onClick={handleSaveMessage}>save message</Button>
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
