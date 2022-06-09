import { useState } from "react";
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

  return (
    <div>
      <h2>{props.userWinMessage}</h2>
    </div>
  );
}
