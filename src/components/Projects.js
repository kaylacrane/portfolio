import React from "react";
import ProjectCard from "./ProjectCard";
import { projectsList } from "../data/projectsList";

const createProjectCards = projectsList.map((project, index) => {
  return <ProjectCard key={index} project={project}></ProjectCard>;
});
// function openInfo(event) {
//   const project = event.currentTarget;
//   const info = project.querySelector(".project-info");
//   info.classList.toggle("open-info");
// }
// function stopPropagation(event) {
//   event.stopPropagation();
// }
function Projects() {
  return (
    <div className="projects-page">
      <h2 className="title">My Projects</h2>
      <ul className="project-list">{createProjectCards}</ul>
    </div>
  );
}

export default Projects;
