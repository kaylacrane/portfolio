import React from "react";

const qAndA = [
  {
    question: "Why did you change careers?",
    answer:
      "I enjoyed teaching but English never really interested me (I know, not convenient at all considering I'm a foreigner in Spain where there are lots of English teacher jobs, but that's life 🤷🏽‍♀️).",
  },
  {
    question: "Do you miss anything about being a teacher?",
    answer:
      "I miss sharing knowledge and seeing my students get better and better.",
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

export const makeQandA = qAndA.map((pair, index) => {
  return (
    <li key={index}>
      <h4 className="question">{pair.question}</h4>
      <p className="answer">{pair.answer}</p>
    </li>
  );
});
