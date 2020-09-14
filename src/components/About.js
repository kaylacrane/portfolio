import React, { useState, useEffect } from "react";
import photo from "../images/kayla.jpg";
import { makeQandA } from "../data/qAndA";
import { mePhrases } from "../data/mePhrases";
import SocialMedia from "./SocialMedia";

function About() {
  const [meIndex, setMeIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setMeIndex((meIndex) =>
        meIndex === mePhrases.length - 1 ? 0 : meIndex + 1
      );
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="about-page">
        <h2 className="title">About Me</h2>
        <div className="image-container bounce-in-top">
          <img src={photo} alt="happy programmer" />
        </div>
        <SocialMedia />
        <div className="intro">
          <p>
            My name is <span className="highlight">Kayla</span>
          </p>
          <p>and Im a ... </p>
          <p className="highlight">{mePhrases[meIndex]}</p>
        </div>

        <ul className="questions-list">
          <h2>FAQ</h2>
          {makeQandA}
        </ul>
      </div>
    </>
  );
}

export default About;
