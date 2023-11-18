import React, { useState } from "react";
import "./navbar.css";
import { Nav } from "react-bootstrap";

export default function Navbar() {
  const [Nav, setNav] = useState(true);
  const setNavigation = () => {
    setNav(!Nav);
  };

  return (
    <nav>
      <section className="navigation">
        <div className="logo">LOGO</div>
        <i
          class={`bi bi-list ${Nav ? "bi-active" : ""}`}
          onClick={setNavigation}
        ></i>
        <i
          class={`bi bi-x ${Nav ? "" : "bi-active"}`}
          onClick={setNavigation}
        ></i>
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
      </section>
    </nav>
  );
}
