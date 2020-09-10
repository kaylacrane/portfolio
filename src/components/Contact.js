import React, { useState, useEffect } from "react";
const me = [
  "frontend developer",
  "gardener 👩‍🌾",
  "language nerd",
  "science enthusiast",
  "tea drinker ☕",
  "🐈 cat lady",
  "dog friend",
];

function Contact() {
  const [meIndex, setMeIndex] = useState(0);

  useEffect(() => {
    setInterval(() => {
      setMeIndex((meIndex) => (meIndex === me.length - 1 ? 0 : meIndex + 1));
    }, 1500);
  }, []);

  return (
    <>
      <div className="contact-page">
        <span>My name is Kayla</span>
        <span>
          and I'm a <span className="highlight">{me[meIndex]}</span>.
        </span>
      </div>
    </>
  );
}

export default Contact;
