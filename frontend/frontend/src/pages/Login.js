import React from "react";
import "./Page.css";

const Login = () => {
  return (
    <div className="page-container">
      <h1>Login</h1>
      <form className="page-form">
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Password" required />
        <button type="submit">Log In</button>
      </form>
    </div>
  );
};

export default Login;