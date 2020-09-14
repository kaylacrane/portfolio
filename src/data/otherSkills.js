import React from "react";

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

export const otherSkillsList = otherSkills.map((skill, index) => {
  return (
    <span key={index} className={`skill-${skill.level}`}>
      {skill.name}
    </span>
  );
});
