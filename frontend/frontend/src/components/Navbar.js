import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";  // Ensure styling is applied

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">StudSched 📚</div>
      
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/scheduler">Scheduler</Link></li>
        <li><Link to="/create">Create Schedule</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact Us</Link></li>
      </ul>

      <div className="auth-buttons">
        <Link to="/login" className="btn">Login</Link>
        <Link to="/signup" className="btn btn-primary">Sign Up</Link>
      </div>
    </nav>
  );
};

export default Navbar;