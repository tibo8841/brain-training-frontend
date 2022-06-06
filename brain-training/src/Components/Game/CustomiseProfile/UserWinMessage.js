import { React, useEffect, useState } from "react";
import {
  Collapse,
  List,
  ListItem,
  ListItemText,
  ListItemButton,
} from "@mui/material";
export default function UserWinMessage() {
  //const [userWinMessage, setUserWinMessage] = useState("I win!");
  const [isOpen, setIsOpen] = useState(false);

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
      <Collapse in={isOpen}>
        <List sx={{ width: 300, background: "grey" }}>
          <ListItem>
            <ListItemButton>
              <ListItemText primary="V" />
            </ListItemButton>
          </ListItem>
        </List>
      </Collapse>
    </div>
  );
}
