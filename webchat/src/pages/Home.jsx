import React from "react";
import Chat from "../components/Chat";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <div className="home">
      <div className="container">
        {/* <Navbar /> */}
        <Sidebar />
        <Chat />
      </div>
    </div>
  );
};

export default Home;
