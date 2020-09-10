import React, { useState, useEffect } from "react";

import { Router } from "react-router-dom";

function CoverPage() {
  return (
    <>
      <div className="cover">
        <div className="cover__text">
          <span className="hand wobble-hor-bottom">👋</span>
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
          >
            <span className="icon fa-lg fab fa-linkedin"></span>
          </a>
          <a href="https://github.com/kaylacrane" title="Visit my GitHub page">
            <span className="icon fa-lg fab fa-github-square"></span>
          </a>
          <a
            href="https://twitter.com/KaylaJCrane"
            title="Visit my Twitter page"
          >
            <span className="icon fa-lg fab fa-twitter-square"></span>
          </a>
          <a href="mailto:kayla.crane@gmail.com" title="Send me an email">
            <span className="icon fa-lg fas fa-envelope-square"></span>
          </a>
        </div>
      </div>
    </>
  );
}

export default CoverPage;
