import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import { projectsList } from "../data/projectsList";

function Projects() {
  const [openProjectIDs, setOpenProjectIDs] = useState([]);

  function openInfo(event) {
    const project = parseInt(event.currentTarget.id);
    if (!openProjectIDs.includes(project)) {
      setOpenProjectIDs([...openProjectIDs, project]);
    } else {
      const newIDs = openProjectIDs.filter((id) => id !== project);
      setOpenProjectIDs(newIDs);
    }
  }
  function stopPropagation(event) {
    event.stopPropagation();
  }

  const createProjectCards = projectsList.map((project, index) => {
    return (
      <ProjectCard
        key={index}
        project={project}
        openInfo={openInfo}
        stopPropagation={stopPropagation}
        openProjectIDs={openProjectIDs}
      ></ProjectCard>
    );
  });
  return (
    <div className="projects-page">
      <h2 className="title">My Projects</h2>
      <ul className="project-list">{createProjectCards}</ul>
    </div>
  );
}

export default Projects;
