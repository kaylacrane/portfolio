import React, { useState } from "react";

import { Link } from "react-router-dom";

function Menu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  function rotateBox() {
    if (isMenuOpen === false) {
      setIsMenuOpen(true);
    } else {
      setIsMenuOpen(false);
    }
  }
  return (
    <div className="menu scene">
      <div className={`box ${isMenuOpen ? "move-box" : ""}`}>
        <div className="front">
          <span
            className="open-icon fas fa-chevron-down"
            onClick={rotateBox}
          ></span>
        </div>
        <div className="top">
          <nav className="nav-bar">
            <span
              className={`fas fa-times-circle close-icon ${
                isMenuOpen ? "move-icon" : ""
              }`}
              onClick={rotateBox}
            ></span>
            <ul className="links-list">
              <Link to={{ pathname: "/" }}>
                <li>home</li>
              </Link>
              <Link to={{ pathname: "/about" }}>
                <li>about</li>
              </Link>
              <Link to={{ pathname: "/skills" }}>
                <li>skills</li>
              </Link>
              <Link to={{ pathname: "/projects" }}>
                <li>projects</li>
              </Link>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Menu;
