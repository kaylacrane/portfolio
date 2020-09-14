import React from "react";

function ProjectCard(props) {
  const { name, image, github, url, description, id } = props.project;
  return (
    <li className="project-card scale-in-top" id={id}>
      <div
        className="image-container"
        alt={name}
        style={{ backgroundImage: `url(${image})` }}
      ></div>

      <div className="project-info">
        <h3 className="name">{name}</h3>
        <div className="links">
          <a
            href={github}
            alt="See code on GitHub"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-lg fab fa-github"></i>
          </a>
          <a
            href={url}
            alt="View website"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-lg fas fa-laptop"></i>
          </a>
        </div>
        <p className="description">{description}</p>
      </div>
    </li>
  );
}
export default ProjectCard;
