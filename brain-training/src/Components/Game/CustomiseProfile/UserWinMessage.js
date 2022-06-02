import { React, useEffect, useState } from "react";
export default function UserWinMessage() {
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
      <h1>User's win message</h1>
    </div>
  );
}
