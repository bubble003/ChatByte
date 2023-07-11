import React, { useContext } from "react";
import { auth } from "../firebase";
import { signOut } from "firebase/auth";
import { AuthContext } from "../context/AuthContext";

const Navbar = () => {
  const { currentUser } = useContext(AuthContext);

  return (
    <div className="navbar">
      <span className="logo">XXXXX</span>
      <div className="user">
        <img className="avatar" src={currentUser.photoURL} alt="avatar" />
        <span> {currentUser.displayName} </span>
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
