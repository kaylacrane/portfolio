import React from "react";

const qAndA = [
  {
    question: "Why did you change careers?",
    answer:
      "Teaching English was never my passion (I know, not convenient at all considering there are oodles of English teacher jobs in Spain, but that's life 🤷🏽‍♀️). All four of my brothers and my husband work in tech, so something computer-related always seemed to be in my professional destiny. Then I went to a DjangoGirls workshop and realized that I liked programming, so I signed up for a frontend bootcamp. The rest is history!",
  },
  {
    question: "Do you miss anything about being a teacher?",
    answer:
      "I miss sharing knowledge 👩‍🏫 with goofy little kids, as well as seeing how my students progressed over the school year. I also miss the enthusiasm for learning that they showed every day.",
  },
  {
    question: "What do you like about programming?",
    answer: `I love the challenge of coding and how it's like putting together a moving puzzle. And problem-solving is my jam so let's debug 🐛 together sometime!`,
  },
  {
    question: "What do you do when you're not programming?",
    answer:
      "Gardening, video games, watching movies with my family, playing with my pets (a 🐱 and 2 🐶), going for walks, eating and making food, sometimes I sleep too... ",
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
