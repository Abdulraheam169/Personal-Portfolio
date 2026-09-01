import React from "react";
import { education } from "../data";
// import "./App.css";

const Education = () => {
  return (
    <section className="education-section" id="education">
      <h2 className="section-title">My Journey</h2>
      <div className="timeline">
        {education.map((item) => (
          <div className="timeline-item" key={item.id}>
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <span className="timeline-period">{item.period}</span>
              <h3 className="timeline-degree">{item.degree}</h3>
              <h4 className="timeline-institution">{item.institution}</h4>
              <p className="timeline-desc">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
