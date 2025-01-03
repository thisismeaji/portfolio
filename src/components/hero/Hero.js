import React from 'react';
import Styles from "../hero/hero.module.css";

export default function Hero() {
  return (
    <div className={Styles.hero}>
        <h2>Hi, I am Aji</h2>
        <h1>a Fresh Graduate</h1>
        <p>A fresh graduate with a passion for technology, ready to contribute fresh ideas and continuously develop new skills.</p>
        <button>Learn more About Me</button>
    </div>
  );
}
