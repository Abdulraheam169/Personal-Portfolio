import React from "react";
import { projects } from "../data";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
// import "./App.css";

const Projects = () => {
  return (
    <section className="projects-section" id="projects">
      <h2 className="section-title">Things I've Built</h2>
      <div className="projects-grid">
        {projects.map((project) => (
          <div className="project-card" key={project.id}>
            <div className="project-content">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-desc">{project.description}</p>
              <div className="tech-stack">
                {project.techStack.map((tech, index) => (
                  <span key={index} className="tech-badge">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div className="project-links">
              <a
                href={project.liveLink}
                target="_blank"
                rel="noreferrer"
                className="icon-link"
              >
                <FaExternalLinkAlt /> Live Demo
              </a>
              <a
                href={project.sourceLink}
                target="_blank"
                rel="noreferrer"
                className="icon-link"
              >
                <FaGithub /> Source Code
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
