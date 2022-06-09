import { useState, useEffect } from "react";
import { getProfile } from "../../Networking";

export default function UserWinMessageDisplay(props) {
  const [winMessage, setWinMessage] = useState("");

  // async function fetchUserWinMessage() {
  //   const authoriseUser = await getProfile();
  //   if (authoriseUser) {
  //     const user = await getProfile();
  //     setWinMessage(user.user.win_message);
  //   }
  // }
  // fetchUserWinMessage();

  function showWinMessage() {
    if (props.isNewWinMessage) {
      return <h2>{props.userWinMessage}</h2>;
    } else {
      return <h2>{props.originalWinMessage}</h2>;
    }
  }

  return <div>{showWinMessage()}</div>;
}
