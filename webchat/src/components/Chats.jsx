import React from "react";

const Chats = () => {
  return (
    <div className="chats">
      <div className="userChat">
        <img
          className="profile"
          src="https://images.pexels.com/photos/16024276/pexels-photo-16024276/free-photo-of-portrait-of-woman-with-purple-orchids-in-her-hair.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
        />
        <div className="userChatInfo">
          <span style={{ fontSize: "20px", fontWeight: "500" }}>Rohan</span>
          <p style={{ fontSize: "12px", color: "lightgrey" }}>awd</p>
        </div>
      </div>
      <div className="userChat">
        <img
          className="profile"
          src="https://images.pexels.com/photos/16024276/pexels-photo-16024276/free-photo-of-portrait-of-woman-with-purple-orchids-in-her-hair.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
        />
        <div className="userChatInfo">
          <span style={{ fontSize: "20px", fontWeight: "500" }}>Rohan</span>
          <p style={{ fontSize: "12px", color: "lightgrey" }}>awd</p>
        </div>
      </div>
      <div className="userChat">
        <img
          className="profile"
          src="https://images.pexels.com/photos/16024276/pexels-photo-16024276/free-photo-of-portrait-of-woman-with-purple-orchids-in-her-hair.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
        />
        <div className="userChatInfo">
          <span style={{ fontSize: "20px", fontWeight: "500" }}>Rohan</span>
          <p style={{ fontSize: "12px", color: "lightgrey" }}>awd</p>
        </div>
      </div>{" "}
    </div>
  );
};

export default Chats;
