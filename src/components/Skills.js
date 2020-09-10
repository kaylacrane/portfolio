import React from "react";
const techSkills = [
  { name: "HTML5", level: "medium" },
  { name: "JavaScript ES6", level: "high" },
  { name: "Flexbox & Grid", level: "low" },
  { name: "CSS3 & SASS", level: "medium" },
  { name: "ReactJS", level: "medium" },
  { name: "Git/GitHub", level: "low" },
  { name: "APIs", level: "high" },
  { name: "Gulp", level: "low" },
  { name: "Responsive design", level: "medium" },
  { name: "Flexbox & Grid", level: "high" },
  { name: "DevTools", level: "low" },
];
const skillsList = techSkills.map((skill, index) => {
  return (
    <span key={index} className={`skill-${skill.level}`}>
      {skill.name}
    </span>
  );
});

const otherSkills = [
  { name: "teamwork", level: "high" },
  { name: "leadership", level: "low" },
  { name: "teaching", level: "medium" },
  { name: "problem-solving", level: "high" },
  { name: "French", level: "medium" },
  { name: "", level: "low" },
  { name: "patience", level: "medium" },
  { name: "Spanish", level: "high" },
  { name: "Flexbox & Grid", level: "low" },
];
const otherList = otherSkills.map((skill, index) => {
  return (
    <span key={index} className={`skill-${skill.level}`}>
      {skill.name}
    </span>
  );
});

function CoverPage() {
  return (
    <>
      <div className="skills-page">
        <article className="skills-section">
          <h2 className="title">Tech Skills</h2>
          <div className="skills-list fade-in">{skillsList}</div>
        </article>

        <article className="skills-section">
          <h2 className="title">Other Skills</h2>
          <div className="skills-list fade-in">{otherList}</div>
        </article>
      </div>
    </>
  );
}

export default CoverPage;
