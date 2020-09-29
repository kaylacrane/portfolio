import React from "react";

const techSkills = [
  { name: "HTML5", level: "medium" },
  { name: "JavaScript ES6", level: "high" },
  { name: "Flexbox & Grid", level: "low" },
  { name: "CSS3 & SASS", level: "medium" },
  { name: "Python", level: "low" },
  { name: "ReactJS", level: "medium" },
  { name: "Git/GitHub", level: "low" },
  { name: "APIs", level: "high" },
  { name: "Styled components", level: "low" },
  { name: "Gulp", level: "low" },
  { name: "Responsive design", level: "medium" },
  { name: "Flexbox & Grid", level: "high" },
  { name: "DevTools", level: "low" },
];
export const techSkillsList = techSkills.map((skill, index) => {
  return (
    <span key={index} className={`skill-${skill.level}`}>
      {skill.name}
    </span>
  );
});
