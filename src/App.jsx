import React from "react";
import "./index.css";

import PersonalInfo from "./components/PersonalInfo";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="App">
      <main className="container">
        <PersonalInfo />
        <Projects />
        <Skills />
        <Education />
        <Contact />
      </main>
    </div>
  );
}

export default App;
