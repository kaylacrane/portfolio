import React from "react";
import CVpdf from "../resources/cv-resume-english.pdf";
import { techSkillsList } from "../data/techSkills";
import { otherSkillsList } from "../data/otherSkills";

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
          <div className="skills-list fade-in">{techSkillsList}</div>
        </article>

        <article className="skills-section">
          <h2 className="title">Other Skills</h2>
          <div className="skills-list fade-in">{otherSkillsList}</div>
        </article>
      </div>
    </>
  );
}

export default CoverPage;
