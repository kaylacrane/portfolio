import React, { useState, useEffect } from "react";
import photo from "../images/kayla.jpg";

const me = [
  "💻 frontend developer",
  "gardener 👩‍🌾",
  "language lover",
  "tea drinker ☕",
  "🐈 cat lady",
  "science nerd 🧪",
  "📚 lifelong student",
  "country 🚜 girl",
];

const qAndA = [
  {
    question: "Why did you change careers?",
    answer:
      "I enjoyed teaching but English never really interested me (I know, not convenient at all considering I'm a foreigner in Spain where there are lots of English teacher jobs, but that's life 🤷🏽‍♀️).",
  },
  {
    question: "Do you miss anything about being a teacher?",
    answer:
      "I miss sharing knowledge and seeing how my students got better and better.",
  },
  {
    question: "What do you like about programming?",
    answer: `I like the challenge of it. Problem-solving is my jam so let's debug 🐛 together sometime.`,
  },
  {
    question: "What do you do when you're not programming?",
    answer:
      "Gardening, video games, watching movies with my family, playing with my pets (a 🐱 and 2 🐶), going for walks, eating and making food... ",
  },
];

function About() {
  const [meIndex, setMeIndex] = useState(0);
  const makeQandA = qAndA.map((pair, index) => {
    return (
      <li key={index}>
        <h4 className="question">{pair.question}</h4>
        <p className="answer">{pair.answer}</p>
      </li>
    );
  });

  useEffect(() => {
    setInterval(() => {
      setMeIndex((meIndex) => (meIndex === me.length - 1 ? 0 : meIndex + 1));
    }, 2000);
  }, []);

  return (
    <>
      <div className="contact-page">
        <div className="image-container">
          <img src={photo} alt="happy programmer" />
        </div>

        <div className="social-media">
          <a
            href="https://www.linkedin.com/in/kaylacrane/"
            title="Visit my LinkedIn page"
          >
            <span className="icon fa-2x fab fa-linkedin"></span>
          </a>
          <a href="https://github.com/kaylacrane" title="Visit my GitHub page">
            <span className="icon fa-2x fab fa-github-square"></span>
          </a>
          <a
            href="https://twitter.com/KaylaJCrane"
            title="Visit my Twitter page"
          >
            <span className="icon fa-2x fab fa-twitter-square"></span>
          </a>
          <a href="mailto:kayla.crane@gmail.com" title="Send me an email">
            <span className="icon fa-2x fas fa-envelope-square"></span>
          </a>
        </div>
        <div className="intro">
          <p>
            My name is <span className="highlight">Kayla</span>
          </p>
          <p>and I'm a ...</p>
          <p className="highlight">{me[meIndex]}</p>
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
