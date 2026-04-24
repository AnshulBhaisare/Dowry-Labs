import ThemeToggle from "./ThemeToggle";
import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">

      {/* LEFT LOGO */}
      <div className="logo">
        <span className="logo-icon">⚖️</span>
        <div>
          <h2>Dowry Labs</h2>
          <p>AI Powered Awareness</p>
        </div>
      </div>

      {/* NAV LINKS */}
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/calculator">Calculator</Link>
        <Link to="/learn">Learn</Link>
        <Link to="/regional">Regional</Link>
        <Link to="/laws">Laws</Link>
        <Link to="/faq">FAQ</Link>
        <Link to="/resources">Resources</Link>
      </div>

      {/* CTA BUTTON */}
      <div>
        <button className="cta-btn">Know Your Rights</button>
      </div>

    </nav>
  );
}

export default Navbar;