import React from "react";
import CVpdf from "../resources/cv-resume-english.pdf";

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
  { name: "French", level: "medium" },
  { name: "teaching", level: "medium" },
  { name: "problem-solving", level: "high" },
  { name: "perserverance", level: "medium" },
  { name: "Spanish", level: "high" },
  { name: "patience", level: "low" },
  { name: "communication", level: "medium" },
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
          <h2 className="title">CV / Resume</h2>
          <a href={CVpdf} target="_blank" rel="noopener noreferrer">
            <button className="download-cv roll-in-right">Download</button>
          </a>
        </article>
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
