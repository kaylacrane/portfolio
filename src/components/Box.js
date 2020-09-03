import React from "react";

function Box() {
  function rotateBox(event) {
    const box = document.querySelector(".box");
    if (event.type === "touchmove") {
      box.classList.toggle("move-it");
    }

    if (event.deltaY > 0) {
      box.classList.add("move-it");
    } else if (event.deltaY < 0) {
      box.classList.remove("move-it");
    }
  }

  window.addEventListener("wheel", rotateBox);
  window.addEventListener("touchmove", rotateBox);
  return (
    <div className="scene">
      <div className="box">
        <div className="front">
          <span> </span>
        </div>
        {/* <div className="back">back</div> */}
        <div className="top">
          <nav className="nav-bar">
            <ul className="menu">
              <a
                href="https://github.com/kaylacrane"
                target="_blank"
                rel="noopener noreferrer"
              >
                <li>me</li>
              </a>
              <a
                href="https://github.com/kaylacrane"
                target="_blank"
                rel="noopener noreferrer"
              >
                <li>my work</li>
              </a>
              <a
                href="https://github.com/kaylacrane"
                target="_blank"
                rel="noopener noreferrer"
              >
                <li>CV</li>
              </a>
              <a
                href="https://github.com/kaylacrane"
                target="_blank"
                rel="noopener noreferrer"
              >
                <li>contact</li>
              </a>
            </ul>
          </nav>
        </div>
        {/* <div className="bottom">bottom</div> */}
      </div>
    </div>
  );
}

export default Box;
