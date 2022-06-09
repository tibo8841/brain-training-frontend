import React, { useEffect, useState } from "react";
import AlwaysScrollToBottom from "./AlwaysScrollToBottom";
import "./Chat.css";

function Chat({ socket, username, room }) {
  // if (username !== "" && room !== "") {
  //   socket.emit("join_room", room);
  // }

  const [currentMessage, setCurrentMessage] = useState("");
  const [messageList, setMessageList] = useState([]);

  const sendMessage = async () => {
    if (currentMessage !== "") {
      const messageData = {
        room: room,
        author: username,
        message: currentMessage,
        time: new Date(Date.now()).toLocaleTimeString(),
      };

      await socket.emit("send_message", messageData);
      setMessageList([...messageList, messageData]);
      setCurrentMessage("");
    }
  };

  useEffect(() => {
    console.log("use effect running");
    socket.on("receive_message", (data) => {
      console.log("this be data coming in");
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
