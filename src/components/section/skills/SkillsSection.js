import React from 'react';
import Styles from "../skills/skillssection.module.css";

export default function SkillsSection() {
  return (
    <section>
      <div className={Styles.skills}>
        <div>
            <h2>My Skills</h2>
            <h1>The Art of Building & Creating</h1>
            <p>Every project I take on is a new adventure, full of challenges and opportunities for growth. With each step I take, I learn something new, refine my skills, and continue to evolve. This is how I’ve gained the expertise I’m sharing below.</p>
        </div>
        <div>
            <span>Web Development</span>
            <span>Web Performance & Optimization</span>
            <span>Deployment & Hosting</span>
            <span>Communication</span>
            <span>Project Management & Workflow</span>
            <span>Branding & Marketing</span>
            <span>Team Work</span>
            <span>Design</span>
        </div>
      </div>
    </section>
  );
}
