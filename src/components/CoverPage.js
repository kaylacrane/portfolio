import React from "react";

function CoverPage() {
  return (
    <>
      <div className="cover">
        <div className="cover__text">
          <span
            className="hand wobble-hor-bottom"
            role="img"
            aria-label="waving hand"
          >
            👋
          </span>
          <h2 className="scale-in-hor-left">Hi there!</h2>
          <span>You are staring at the frontpage of my portfolio.</span>
          <span>
            <span className="highlight">
              <small className="decoration fas fa-bahai"></small>Welcome
              <small className="decoration fas fa-bahai"></small>
            </span>
          </span>
          <span>Please take a look around.</span>
          <span>I hope you enjoy!</span>
          <small>-kayla</small>
        </div>
        <div className="social-media">
          <a
            href="https://www.linkedin.com/in/kaylacrane/"
            title="Visit my LinkedIn page"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="icon fab fa-linkedin-in"></span>
          </a>
          <a
            href="https://github.com/kaylacrane"
            title="Visit my GitHub page"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="icon fab fa-github"></span>
          </a>
          <a
            href="https://twitter.com/KaylaJCrane"
            title="Visit my Twitter page"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="icon fab fa-twitter"></span>
          </a>
          <a
            href="https://codepen.io/kaylacrane/"
            title="Visit my CodePen page"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="icon fas fa-cube"></span>
          </a>
          <a href="mailto:kayla.crane@gmail.com" title="Send me an email">
            <span className="icon far fa-envelope"></span>
          </a>
        </div>
      </div>
    </>
  );
}

export default CoverPage;
