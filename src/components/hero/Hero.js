import React from 'react';
import Styles from "../hero/hero.module.css";

export default function Hero() {
  return (
    <div className={Styles.hero}>
        <h2>Hi, I am Aji</h2>
        <h1>a Frontend Developer</h1>
        <p>It feels so rewarding when I successfully turn a design into code.</p>
        <button>View My Project</button>
    </div>
  );
}
