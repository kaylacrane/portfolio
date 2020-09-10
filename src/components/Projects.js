import React, { useState, useEffect } from "react";
const projects = [
  {
    name: "Lazy Cat Search Engine",
    github: "https://github.com/kaylacrane/lazy-cat-search-engine",
    url: "https://kaylacrane.github.io/lazy-cat-search-engine/",
    description: "TV show search engine with favorites list.",
    image:
      "https://github.com/kaylacrane/lazy-cat-search-engine/blob/master/lazy-cat-page.JPG?raw=true",
  },
  {
    name: "Botanical Profile Cards",
    github: "https://github.com/kaylacrane/botanical-profile-cards",
    url: "https://kaylacrane.github.io/botanical-profile-cards/",
    description:
      "A virtual calling card generator. Provides URL for sharing on social media with integrated button for sharing via Twitter.",
    image: "",
  },
];
const createProjectCards = projects.map((project, index) => {
  console.log(project.image);
  return (
    <li className="project-card" key={index}>
      <img className="image-container" src={project.image} alt={project.name} />

      <div className="project-info">
        <h3>{project.name}</h3>
        <div className="links">
          <a href={project.github} alt="See code on GitHub">
            <i className="fab fa-github"></i>
          </a>
          <a href={project.url} alt="View website">
            <i className="fas fa-laptop"></i>
          </a>
        </div>
        <p>{project.description}</p>
      </div>
    </li>
  );
});

function Projects() {
  return (
    <div className="projects-page">
      <h1>My Projects</h1>
      <ul className="project-list">{createProjectCards}</ul>
    </div>
  );
}

export default Projects;
