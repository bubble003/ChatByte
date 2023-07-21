import React, { useContext } from "react";
import { auth } from "../firebase";
import { signOut } from "firebase/auth";
import { AuthContext } from "../context/AuthContext";

const Navbar = () => {
  const { currentUser } = useContext(AuthContext);

  return (
    <div className="navbar">
      <span className="logo2">ChatByte</span>
      <div className="user">
        <img className="avatar" src={currentUser.photoURL} alt="avatar" />
        <h3 style={{color: "whitesmoke"}}> {currentUser.displayName} </h3>
        <button
          style={{
            borderBottom: "1px solid black",
            borderRadius: "8px",
            fontSize: "10px",
            cursor: "pointer",
          }}
          onClick={() => signOut(auth)}
        >
          Log Out
        </button>
      </div>
    </div>
  );
};

export default Navbar;
