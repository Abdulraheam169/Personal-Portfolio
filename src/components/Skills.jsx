import React from "react";
import { skills } from "../data";
// import "./App.css";

const Skills = () => {
  return (
    <section className="skills-section" id="skills">
      <h2 className="section-title">What I Bring to the Table</h2>
      <div className="skills-container">
        {skills.map((skillGroup, index) => (
          <div className="skill-category" key={index}>
            <h3 className="category-title">{skillGroup.category}</h3>
            <div className="badges-container">
              {skillGroup.items.map((item, idx) => (
                <span className="skill-badge" key={idx}>
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
