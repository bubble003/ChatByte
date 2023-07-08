import React from "react";

const Navbar = () => {
  return (
    <div className="navbar">
      <span className="logo">XXXXX</span>
      <div className="user">
        <img
          className="avatar"
          src="https://images.pexels.com/photos/16024276/pexels-photo-16024276/free-photo-of-portrait-of-woman-with-purple-orchids-in-her-hair.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="avatar"
        />
        <span> Adi </span>
        <button
          style={{
            borderBottom: "1px solid black",
            borderRadius: "8px",
            fontSize: "10px",
            cursor: "pointer",
          }}
        >
          Log Out
        </button>
      </div>
    </div>
  );
};

export default Navbar;
