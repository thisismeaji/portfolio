import React from 'react';
import Styles from "../about/about.module.css";
import Image from 'next/image';

export default function AboutSection  () {
  return (
    <section className={Styles.aboutSection}>
      <div className={Styles.aboutImage}>
        <Image
          src="/images/profile.png"
          width={1000}
          height={1000}
          alt='Profile aji'
        />
      </div>
      <div className={Styles.aboutText}>
        <h1>About Me</h1>
        <h2>Hello There, I’m Ajisaka Kamandanu.</h2>
        <p>I graduated with a Bachelor's degree in Information Technology from Muhammadiyah University of Purworejo with a GPA of 3.2.</p>
        <p>As a fresh graduate, I have a strong passion for frontend development and a high level of enthusiasm to make a positive impact in this industry.</p>
        <p>I enjoy exploring new ideas, solving problems, and continuously developing my skills to stay relevant in the ever-evolving world of frontend development.</p>
        <div className={Styles.aboutCTA}>
          <button>Hire Me</button>
          <button>Donwload CV</button>
        </div>
      </div>
    </section>
  );
}
