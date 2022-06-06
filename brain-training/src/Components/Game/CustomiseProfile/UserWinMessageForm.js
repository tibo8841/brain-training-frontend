import { React, useEffect, useState } from "react";
import { TextField } from "@mui/material";
export default function UserWinMessage() {
  const [userWinMessage, setUserWinMessage] = useState("I win!");
  const [isOpen, setIsOpen] = useState(false);
  // const winMessageCharacterLimit = 20;

  function handleSubmit(event) {
    event.preventDefault();
  }
  /*
  useEffect(() => {
    async function fetchUserWinMessage() {
      const userWinMessage =
        await "insert fetch request through networking to get win message";
      setUserWinMessage(userWinMessage);
    }
    fetchUserWinMessage();
  }, []);
  */

  return (
    <div>
      <h1>User's win message</h1>
      <form noValidate autoComplete="off" onSubmit={handleSubmit}>
        <TextField
          onChange={(event) => setUserWinMessage(event.target.value)}
          label="Enter your win message"
          variant="outlined"
          style={{ width: 300 }}
        />
        <button
          onClick={() => {
            console.log("write a fetch request for this win message: ");
          }}
          type="submit"
          variant="contained"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
