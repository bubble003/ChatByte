import React, { useContext } from "react";
import Messages from "./Messages";
import Input from "./Input";
import { ChatContext } from "../context/ChatContext";
import { auth } from "../firebase";

const Chat = () => {
  const { data } = useContext(ChatContext);
  return (
    <div className="chat">
      <div className="chatInfo">
        <h2 className="secondUser">{data.user?.displayName}</h2>
      </div>
      <Messages />
      <Input />
    </div>
  );
};

export default Chat;
