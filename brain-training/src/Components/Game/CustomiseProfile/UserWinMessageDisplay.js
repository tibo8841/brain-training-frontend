import { React } from "react";
import { getProfile } from "../../Networking";

export default function UserWinMessageDisplay() {
  async function fetchUserWinMessage() {
    const user = await getProfile();
    const userWinMessage = user.user.win_message;
    return userWinMessage;
  }

  return (
    <div>
      <h2>{fetchUserWinMessage()}</h2>
    </div>
  );
}
