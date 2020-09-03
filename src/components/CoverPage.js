import React from "react";
import Box from "./Box";

function CoverPage() {
  return (
    <>
      <Box />
      <div className="cover">
        <div className="cover__text">
          <h2>Oh, hey there!</h2>
          <span>I'm still working on this... </span>
          <span>Check in later, ok?</span>
          <span>See you then!</span>
          <small>scroll</small>
          <span className="icon fas fa-chevron-down"></span>
        </div>
      </div>
    </>
  );
}

export default CoverPage;
