import React from "react";
import addAvatar from "../assets/addAvatar.png";

const Login = () => {
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">XXXXX</span>
        <span className="title">Register</span>
        <form>
          <input type="text" placeholder="Display name" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <input style={{ display: "none" }} type="file" id="file" />
          <label style={{ cursor: "pointer" }} htmlFor="file">
            <img src={addAvatar} alt="avatar_img" />
            <span> Add an avatar </span>
          </label>
          <button> Sign up</button>
        </form>
        <p>You do not have an account? Login</p>
      </div>
    </div>
  );
};

export default Login;
