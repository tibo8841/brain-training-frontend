import { React, useEffect, useState } from "react";

export default function UserWinMessageDisplay(props) {
  return (
    <div>
      <h1>{props.userWinMessage}</h1>
    </div>
  );
}
