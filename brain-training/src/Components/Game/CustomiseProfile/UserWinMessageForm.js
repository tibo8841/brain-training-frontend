import { React, useState } from "react";
import { TextField } from "@mui/material";
import {
  Collapse,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Box,
  Container,
} from "@mui/material";
export default function UserWinMessageForm(props) {
  const [isOpen, setIsOpen] = useState(false);
  const [defaultMessage, setDefaultMessage] = useState("");
  // const winMessageCharacterLimit = 20;

  async function handleSubmit(event) {
    event.preventDefault();
    event.target.reset();
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
  // setUserWinMessage(event.target.value)

  return (
    <div>
      <Container align="center">
        <Box>
          <List>
            <ListItem>
              <ListItemButton
                onClick={() => {
                  if (!isOpen) {
                    setIsOpen(true);
                  } else {
                    setIsOpen(false);
                  }
                }}
              >
                <ListItemIcon>{"v"}</ListItemIcon>
                <ListItemText primary="Update your win message" />
              </ListItemButton>
            </ListItem>
          </List>
          <Collapse in={isOpen}>
            <List sx={{ width: 300 }}>
              <ListItem>
                <form noValidate autoComplete="off" onSubmit={handleSubmit}>
                  <TextField
                    value={defaultMessage}
                    onChange={(event) => {
                      setDefaultMessage(event.target.value);
                    }}
                    label="Enter your win message"
                    variant="outlined"
                    style={{ width: 300 }}
                  />
                  <button
                    onClick={(event) => {
                      props.updateUsersWinMessage(defaultMessage);
                      console.log("Win message submitted ");
                    }}
                    type="submit"
                    variant="contained"
                  >
                    Submit
                  </button>
                </form>
              </ListItem>
            </List>
          </Collapse>
        </Box>
      </Container>
    </div>
  );
}
