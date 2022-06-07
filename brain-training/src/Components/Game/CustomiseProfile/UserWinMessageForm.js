import { React } from "react";
import { TextField } from "@mui/material";
export default function UserWinMessageForm(props) {
  // const winMessageCharacterLimit = 20;

  function handleSubmit(event) {
    event.preventDefault();
    event.target.reset();
  }
  let usersNewWinMessage = "";
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
  // setUserWinMessage(event.target.value)

  return (
    <div>
      <h1>User's win message:</h1>
      <form noValidate autoComplete="off" onSubmit={handleSubmit}>
        <TextField
          onChange={(event) => (usersNewWinMessage = event.target.value)}
          label="Enter your win message"
          variant="outlined"
          style={{ width: 300 }}
        />
        <button
          onClick={(event) => {
            props.updateUsersWinMessage(usersNewWinMessage);
            console.log(
              "write a fetch request to send the backend for this win message: "
            );
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
