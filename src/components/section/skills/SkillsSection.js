import React from 'react';
import Styles from "../skills/skills.module.css"

export default function SkillsSection() {
  return (
    <section className={Styles.skillsSection}>
      <div>
        <div className={Styles.skills}>
          <h2>What can i do</h2>
          <h1>Skills & Proficiencies</h1>
          <div className={Styles.bar}>
            <p>HTML</p>
            <span></span>
            <p>90%</p>
          </div >
          <div className={Styles.bar}>
            <p>CSS</p>
            <span></span>
            <p>85%</p>
          </div>
          <div className={Styles.bar}>
            <p>Javascript</p>
            <span></span>
            <p>65%</p>
          </div>
          <div className={Styles.bar}>
            <p>React JS</p>
            <span></span>
            <p>50%</p>
          </div>
        </div>
        <div>
          <h2>Last Education</h2>
          <h1>Bachelor of Informatics Engineering</h1>
          <h3>Muhammadiyah University of Purworejo</h3>
        </div>
      </div>
    </section>
  );
}
