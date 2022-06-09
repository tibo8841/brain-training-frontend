import { React } from "react";
import { getProfile } from "../../Networking";

export default function UserWinMessageDisplay(props) {
  async function fetchUserWinMessage() {
    const userWinMessage = await getProfile(2).user.win_message;
    return userWinMessage;
  }

  return (
    <div>
      <h2>{fetchUserWinMessage()}</h2>
    </div>
  );
}
