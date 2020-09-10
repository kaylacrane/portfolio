import React from "react";

import { Link } from "react-router-dom";

function Menu() {
  function rotateBox() {
    const box = document.querySelector(".box");
    box.classList.toggle("move-box");

    const closeIcon = box.querySelector(".close-icon");
    closeIcon.classList.toggle("move-icon");
  }
  return (
    <div className="scene">
      <div className="box">
        <div className="front">
          <span
            className="open-icon fas fa-chevron-down"
            onClick={rotateBox}
          ></span>
        </div>
        <div className="top">
          <nav className="nav-bar">
            <span
              className="fas fa-times-circle close-icon"
              onClick={rotateBox}
            ></span>
            <ul className="menu">
              <Link to={{ pathname: "/" }}>
                <li>home</li>
              </Link>

              <Link to={{ pathname: "/skills" }}>
                <li>skills</li>
              </Link>
              <Link to={{ pathname: "/projects" }}>
                <li>projects</li>
              </Link>

              <Link to={{ pathname: "/contact" }}>
                <li>contact</li>
              </Link>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Menu;
