import React from 'react';
import Styles from "../hero/hero.module.css";

export default function Hero() {
  return (
    <section className={Styles.hero}>
        <h2>Hi, I am Aji</h2>
        <h1>a Fresh Graduate</h1>
        <p>I find it incredibly fulfilling to take on challenges, learn new skills, and grow with every step of the journey.</p>
        <button>Let's talk!</button>
    </section>
  );
}
