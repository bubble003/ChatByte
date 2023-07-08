import React from "react";
import Messages from "./Messages";
import Input from "./Input";

const Chat = () => {
  return (
    <div className="chat">
      <div className="chatInfo">
        <span>James</span>
        <div className="chatIcons">
          <button
            style={{
              borderBottom: "1px solid black",
              borderRadius: "8px",
              fontSize: "10px",
              cursor: "pointer",
            }}
          >
            {" "}
            Log Out
          </button>
        </div>
      </div>
      <Messages />
      <Input />
    </div>
  );
};

export default Chat;
