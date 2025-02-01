import React from 'react';
import Styles from "../about/about.module.css";
import Image from 'next/image';
import HeroButton from '@/components/button/herobutton/HeroButton';

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
        <p>Graduated with a Bachelor's degree in Information Technology from Muhammadiyah University of Purworejo with a GPA of 3.2.</p>
        <p>As a fresh graduate, I possess a strong passion for frontend development, adaptability, and a great willingness to learn new technologies in the field of web development.</p>
        <p>I am enthusiastic about taking on challenges in creating user-friendly and responsive interfaces, enjoy collaborating within development teams, and am determined to make meaningful contributions through innovative and efficient solutions.</p>
        <p>I am committed to continuous growth as a frontend developer and ready to seize opportunities that allow me to enhance my skills while adding value to the projects I work on.</p>
        <HeroButton text="My Portfolio" link="/portfolio"/>
      </div>
    </section>
  );
}
