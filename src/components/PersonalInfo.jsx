import React from "react";
import { personalInfo } from "../data";
// import "./App.css";

const PersonalInfo = () => {
  return (
    <section className="hero-section" id="about">
      <div className="hero-content">
        {/* <h2 className="greeting">Hi, I'm</h2> */}
        <h1 className="hero-name">{personalInfo.name}</h1>
        <h3 className="hero-title">{personalInfo.title}</h3>
        <p className="hero-bio">{personalInfo.bio}</p>
        <div className="hero-buttons">
          <a href="#projects" className="btn btn-primary">
            See My Work
          </a>
          <a href="#contact" className="btn btn-outline">
            Let's Connect
          </a>
        </div>
      </div>
    </section>
  );
};

export default PersonalInfo;
