import React from 'react';
import Styles from "../skills/skills.module.css"

export default function SkillsSection() {
  return (
    <section className={Styles.skillsSection}>
      <div className={Styles.title}>
        <h2>Skills & Proficiencies</h2>
      </div>
      <div className={Styles.main}>
        <div>
          <h3>Hard Skills</h3>
          <h4>Programming</h4>
          <p>Skills in programming languages such as Html, CSS, and JavaScript.</p>
          <h4>SEO (Search Engine Optimization)</h4>
          <p>Techniques to improve website ranking on search engines.</p>
          <h4>Web Development</h4>
          <p>Skills in building websites using HTML, CSS, JavaScript, and related frameworks.</p>
          <h4>Digital Marketing</h4>
          <p>Skills in running digital advertising campaigns, email marketing, or social media.</p>
        </div>
        <div>
          <h3>Soft Skills</h3>
          <h4>Communication</h4>
          <p>The ability to convey information clearly and effectively, both verbally and in writing.</p>
          <h4>Teamwork</h4>
          <p>The ability to work effectively with others in a team setting.</p>
          <h4>Problem Solving</h4>
          <p>The ability to identify and find solutions to problems.</p>
          <h4>Creativity</h4>
          <p>The ability to think outside the box and come up with new ideas.</p>
          <h4>Critical Thinking</h4>
          <p>The ability to analyze facts, think logically, and make decisions based on evidence.</p>
        </div>
      </div>
    </section>
  );
}
