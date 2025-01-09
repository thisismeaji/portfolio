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
        <p>As a fresh graduate, I possess a strong passion, adaptability, and a great willingness to learn in the professional world.</p>
        <p>I am enthusiastic about taking on challenges, enjoy teamwork, and am determined to make meaningful contributions to any organization.</p>
        <p>I am committed to continuous growth and ready to seize opportunities that allow me to develop while adding value to the workplace.</p>
        <div className={Styles.aboutCTA}>
          <button>Hire Me</button>
          <button>Donwload CV</button>
        </div>
      </div>
    </section>
  );
}
