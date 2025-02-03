import React from 'react';
import Styles from "../skills/skills.module.css"
import ContactSection from '../contact/ContactSection';

export default function SkillsSection() {
  return (
    <section className={Styles.skillsSection}>
      <div>
        <div className={Styles.skills}>
          <h2>What can i do</h2>
          <h1>Skills & Proficiencies</h1>
          <div className={Styles.bar}>
            <p>Web Programing</p>
            <span></span>
            <p>75%</p>
          </div >
          <div className={Styles.bar}>
            <p>Web Design</p>
            <span></span>
            <p>65%</p>
          </div>
          <div className={Styles.bar}>
            <p>Copy Writting</p>
            <span></span>
            <p>70%</p>
          </div>
          <div className={Styles.bar}>
            <p>Writting</p>
            <span></span>
            <p>80%</p>
          </div>
        </div>
        <div>
          <h2>Last Education</h2>
          <h1>Bachelor of Informatics Engineering</h1>
          <h3>Muhammadiyah University of Purworejo</h3>
          <div className={Styles.hobbies}> 
            <h2>My Hobbies</h2>
            <h1>Watching Anime</h1>
            <p>Shadow Garden is my favorite anime.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
