import { Avatar, TextField } from "@mui/material";
import { React, useState, useEffect } from "react";

export default function CustomiseProfile() {
  const [userWinMessage, setUserWinMessage] = useState("I win!");

  useEffect(() => {
    async function fetchUserWinMessage() {
      const userWinMessage = await " insert fetch request through networking";
      setUserWinMessage(userWinMessage);
    }
    fetchUserWinMessage();
  }, []);

  function displayCustomWinMessage() {
    return <h2> your win message is: {userWinMessage} </h2>;
  }

  function handleCreateWinMessageSubmit() {
    console.log("Win message submitted");
  }

  return (
    <div>
      <h2> Customise your profile! </h2>

      <Avatar
        alt="Remy Sharp"
        src="brain-training/public/Avatars/blue-car.png"
      />
      <form autoComplete="off">
        <TextField label="You win message:" variant="outlined" />
      </form>
      <button onClick={handleCreateWinMessageSubmit} type="submit">
        Submit
      </button>
    </div>
  );
}

/*Create a drop down menu of possible avatars
  - find pictures of possible avatars - done 
  - upload folder of possible avatars to use source links - done 
    - find out how to upload the pictures folder into the App - done 
  - create a drop down menu displaying the pictures of the avatars
  - Avatar will be stored in database 
    - create a state
    - create a useEffect to update the picture 
*/

// - can change your profile picture, choose from ~16 options
// - can choose colour for your name to be displayed
// - can set a custom win Message to be displayed if you win
// - can add crown to your picture if you have won a game before
