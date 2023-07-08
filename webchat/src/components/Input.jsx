import React from "react";
import Img from "../assets/img.png";
import Attach from "../assets/attach.png";

const Input = () => {
  return (
    <div className="input">
      <input
        className="msgInput"
        type="text"
        placeholder="Type Something.... "
      />
      <div className="send">
        <img src={Img} alt="" />
        <input type="file" style={{ display: "none" }} id="file" />
        <label htmlFor="file">
          <img src={Attach} alt="" />
        </label>
        <button
          style={{
            borderBottom: "1px solid black",
            borderRadius: "8px",
            fontSize: "12px",
            cursor: "pointer",
            width: "50px",
          }}
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default Input;
