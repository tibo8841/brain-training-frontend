import React, { useEffect, useState } from "react";
import AlwaysScrollToBottom from "./AlwaysScrollToBottom";
import "./Chat.css";
import { Avatar } from "@mui/material";
import AvatarOption from "../CustomiseProfile/AvatarOptions";

function Chat({ socket, username, room, avatarID }) {
  const [currentMessage, setCurrentMessage] = useState("");
  const [messageList, setMessageList] = useState([]);

  const sendMessage = async () => {
    if (currentMessage !== "") {
      const messageData = {
        room: room,
        author: username,
        message: currentMessage,
        avatarID: avatarID,
        time: new Date(Date.now()).toLocaleTimeString(),
      };

      await socket.emit("send_message", messageData);
      setMessageList([...messageList, messageData]);
      setCurrentMessage("");
    }
  };

  function getAvatarLink(avatarID) {
    let chosenAvatar = AvatarOption().find((avatar) => avatar.id === avatarID);
    return chosenAvatar.link;
  }

  useEffect(() => {
    console.log("use effect running");
    socket.on("receive_message", (data) => {
      setMessageList([...messageList, data]);
    });
  }, [socket, messageList]);

  return (
    <div className="chat-window">
      <div className="chat-header">
        <p>Live Chat</p>
      </div>
      <div className="chat-body">
        {messageList.map((messageContent) => {
          return (
            <div
              className="message"
              id={messageContent.time}
              key={messageContent.time}
            >
              <div>
                <div className="message-content">
                  <Avatar
                    src={getAvatarLink(messageContent.avatarID)}
                    sx={{ margin: "3%" }}
                  />
                  <p>{messageContent.message}</p>
                </div>
                <div className="message-meta">
                  <p id="time">{messageContent.time}</p>
                  <p id="author">{messageContent.author}</p>
                </div>
              </div>
              <AlwaysScrollToBottom />
            </div>
          );
        })}
      </div>
      <div className="chat-footer">
        <input
          type="text"
          value={currentMessage}
          placeholder="Hey..."
          onChange={(event) => {
            setCurrentMessage(event.target.value);
          }}
          onKeyPress={(event) => {
            event.key === "Enter" && sendMessage();
          }}
        />
        <button onClick={sendMessage}>&#9658;</button>
      </div>
    </div>
  );
}

export default Chat;
