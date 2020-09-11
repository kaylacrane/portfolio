import React, { useState, useEffect } from "react";
const projects = [
  {
    name: "Lazy Cat Search Engine",
    github: "https://github.com/kaylacrane/lazy-cat-search-engine",
    url: "https://kaylacrane.github.io/lazy-cat-search-engine/",
    description:
      "TV show search engine that also allows users to save their favorites list.",
    image:
      "https://github.com/kaylacrane/lazy-cat-search-engine/blob/master/lazy-cat-page.JPG?raw=true",
  },
  {
    name: "Queens of Code",
    github: "https://github.com/kaylacrane/queens-of-code",
    url: "https://kaylacrane.github.io/queens-of-code/",
    description:
      "Responsive design contact page for a group of programmers called 'Queens of Code'.",
    image:
      "https://github.com/kaylacrane/queens-of-code/blob/master/queens-of-code.JPG?raw=true",
  },
  {
    name: "Rick and Morty Characters",
    github: "https://github.com/kaylacrane/rick-and-morty-search-engine",
    url: "https://kaylacrane.github.io/rick-and-morty-search-engine/",
    description:
      "Search for and filter characters from the TV series Rick and Morty.",
    image:
      "https://github.com/kaylacrane/rick-and-morty-search-engine/blob/master/rick-and-morty-page.JPG?raw=true",
  },
  {
    name: "Botanical Profile Cards",
    github: "https://github.com/kaylacrane/botanical-profile-cards",
    url: "https://kaylacrane.github.io/botanical-profile-cards/",
    description:
      "A virtual calling card generator with URL for sharing on social media and integrated Twitter share button.",
    image:
      "https://github.com/kaylacrane/botanical-profile-cards/blob/master/botanical-profile-cards-landing.JPG?raw=true",
  },
];
const createProjectCards = projects.map((project, index) => {
  return (
    <li className="project-card" key={index} onClick={openInfo}>
      <div
        className="image-container"
        alt={project.name}
        style={{ backgroundImage: `url(${project.image})` }}
      ></div>

      <div className="project-info">
        <h3 className="name">{project.name}</h3>
        <div className="links">
          <a href={project.github} alt="See code on GitHub">
            <i className="fa-lg fab fa-github"></i>
          </a>
          <a href={project.url} alt="View website">
            <i className="fa-lg fas fa-laptop"></i>
          </a>
        </div>
        <p className="description">{project.description}</p>
      </div>
    </li>
  );
});
function openInfo(event) {
  const project = event.currentTarget;
  const info = project.querySelector(".project-info");
  if (!info.classList.contains("open-info")) {
    info.classList.add("open-info");
  } else {
    info.classList.remove("open-info");
  }
}
function Projects() {
  return (
    <div className="projects-page">
      <h1 className="title">My Projects</h1>
      <ul className="project-list">{createProjectCards}</ul>
    </div>
  );
}

export default Projects;
