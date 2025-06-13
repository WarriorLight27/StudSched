import React from "react";
import "./Page.css";

const Signup = () => {
  return (
    <div className="page-container">
      <h1>Sign Up</h1>
      <form className="page-form">
        <input type="text" placeholder="Full Name" required />
        <input type="email" placeholder="Email Address" required />
        <input type="password" placeholder="Create Password" required />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Signup;