import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  const isActive = (path) => location.pathname === path;

  const handleNavClick = () => {
    setMobileOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <nav className="navbar">

      {/* LEFT LOGO */}
      <Link to="/" className="logo" onClick={handleNavClick}>
        <span className="logo-icon">⚖️</span>
        <div>
          <h2>Dowry Labs</h2>
          <p>AI Powered Awareness</p>
        </div>
      </Link>

      {/* HAMBURGER (mobile) */}
      <button
        className={`hamburger ${mobileOpen ? "hamburger-open" : ""}`}
        onClick={() => setMobileOpen(!mobileOpen)}
        aria-label="Toggle navigation"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      {/* NAV LINKS */}
      <div className={`nav-links ${mobileOpen ? "nav-links-open" : ""}`}>
        <Link to="/" className={isActive("/") ? "nav-active" : ""} onClick={handleNavClick}>Home</Link>
        <Link to="/calculator" className={isActive("/calculator") ? "nav-active" : ""} onClick={handleNavClick}>Calculator</Link>
        <Link to="/learn" className={isActive("/learn") ? "nav-active" : ""} onClick={handleNavClick}>Learn</Link>
        <Link to="/regional" className={isActive("/regional") ? "nav-active" : ""} onClick={handleNavClick}>Regional</Link>
        <Link to="/laws" className={isActive("/laws") ? "nav-active" : ""} onClick={handleNavClick}>Laws</Link>
        <Link to="/faq" className={isActive("/faq") ? "nav-active" : ""} onClick={handleNavClick}>FAQ</Link>
        <Link to="/resources" className={isActive("/resources") ? "nav-active" : ""} onClick={handleNavClick}>Resources</Link>
      </div>

      {/* CTA BUTTON */}
      <div className="nav-cta">
        <Link to="/laws" className="cta-btn" onClick={handleNavClick}>Know Your Rights</Link>
      </div>

    </nav>
  );
}

export default Navbar;