import React from "react";
import "./navbar.css";

export default function Navbar() {
  return (
    <>
      <nav className="navigation">
        <div className="logo">LOGO</div>
        <div className="navigation-links">
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Speakers</li>
            <li>Sponsers</li>
            <li>Contact</li>
            <li className="register">Register</li>
          </ul>
        </div>
      </nav>
    </>
  );
}
