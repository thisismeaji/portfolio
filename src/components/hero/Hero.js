import React from 'react';
import Styles from "../hero/hero.module.css";

export default function Hero() {
  return (
    <div className={Styles.hero}>
        <h2>Hi, I am Aji</h2>
        <h1>a Frontend Developer</h1>
        <p>With expertise in HTML, CSS, and JavaScript, I am committed to creating engaging and functional user experiences while continuously learning to keep up with the latest advancements in frontend technology.</p>
        <button>Learn more About Me</button>
    </div>
  );
}
