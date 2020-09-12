import React, { useState, useEffect } from "react";
const projects = [
  {
    name: "Lazy Cat Search",
    github: "https://github.com/kaylacrane/lazy-cat-search-engine",
    url: "https://kaylacrane.github.io/lazy-cat-search-engine/",
    description: "TV show search engine with favorites list.",
    image:
      "https://github.com/kaylacrane/lazy-cat-search-engine/blob/master/lazy-cat-page.JPG?raw=true",
  },
  {
    name: "Queens of Code",
    github: "https://github.com/kaylacrane/queens-of-code",
    url: "https://kaylacrane.github.io/queens-of-code/",
    description: "Responsive design contact page. Group project.",
    image:
      "https://github.com/kaylacrane/queens-of-code/blob/master/queens-of-code.JPG?raw=true",
  },
  {
    name: "Rick and Morty Search",
    github: "https://github.com/kaylacrane/rick-and-morty-search-engine",
    url: "https://kaylacrane.github.io/rick-and-morty-search-engine/",
    description: "Search for and filter characters from TV series.",
    image:
      "https://github.com/kaylacrane/rick-and-morty-search-engine/blob/master/rick-and-morty-page.JPG?raw=true",
  },
  {
    name: "Botanical Profile Cards",
    github: "https://github.com/kaylacrane/botanical-profile-cards",
    url: "https://kaylacrane.github.io/botanical-profile-cards/",
    description:
      "Virtual calling card generator with URL for social media and integrated Twitter share button.",
    image:
      "https://github.com/kaylacrane/botanical-profile-cards/blob/master/botanical-profile-cards-landing.JPG?raw=true",
  },
  {
    name: "Guess the Number",
    github: "https://github.com/kaylacrane/guess-the-number-game",
    url: "https://kaylacrane.github.io/guess-the-number-game/",
    description:
      "Guess the Number game with attempts counter, clues, and new game button.",
    image:
      "https://github.com/kaylacrane/guess-the-number-game/blob/master/guess-the-number-game-full.JPG?raw=true",
  },
  {
    name: "Anonymous Proxy",
    github: "https://github.com/kaylacrane/anonymous-proxy",
    url: "https://kaylacrane.github.io/anonymous-proxy/",
    description:
      "Responsive design using SASS, Flexbox, media queries, and animations/transitions.",
    image:
      "https://github.com/kaylacrane/anonymous-proxy/blob/master/anonymous-proxy.JPG?raw=true",
  },
  {
    name: "My Pokemon List",
    github: "https://github.com/kaylacrane/my-pokemons",
    url: "https://kaylacrane.github.io/my-pokemons/",
    description: "Pokemon character search with favorites function.",
    image:
      "https://github.com/kaylacrane/my-pokemons/blob/master/src/images/webpage-screenshot.PNG?raw=true",
  },
];
const createProjectCards = projects.map((project, index) => {
  return (
    <li className="project-card scale-in-top" key={index} onClick={openInfo}>
      <div
        className="image-container"
        alt={project.name}
        style={{ backgroundImage: `url(${project.image})` }}
      ></div>

      <div className="project-info" onClick={stopPropagation}>
        <h3 className="name">{project.name}</h3>
        <div className="links">
          <a
            href={project.github}
            alt="See code on GitHub"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-lg fab fa-github"></i>
          </a>
          <a
            href={project.url}
            alt="View website"
            target="_blank"
            rel="noopener noreferrer"
          >
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
  info.classList.toggle("open-info");
}
function stopPropagation(event) {
  event.stopPropagation();
}
function Projects() {
  return (
    <div className="projects-page">
      <h2 className="title">My Projects</h2>
      <ul className="project-list">{createProjectCards}</ul>
    </div>
  );
}

export default Projects;
