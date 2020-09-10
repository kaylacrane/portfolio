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
      </div>
    </>
  );
}

export default CoverPage;
