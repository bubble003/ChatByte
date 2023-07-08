import React from "react";


const Register = () => {
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">Lama Chat</span>
        <span className="title">Register</span>
        <form>
          <input type="text" placeholder="Display name" />
          <input type="email" placeholder="Email" />
          <button> Register </button>
        </form>
        <p>You have an account? Login</p>
      </div>
    </div>
  );
};

export default Register;
