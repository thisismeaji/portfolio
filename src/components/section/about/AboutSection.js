import React from 'react';
import Styles from "../about/aboutsection.module.css";
import Image from 'next/image';
import Button from '@/components/button/Button';

export default function AboutSection() {
  return (
    <section className={Styles.section}>
      <div className={Styles.about}>
        <div>
            <Image
                src="/assets/images/profile.png"
                width={1920}
                height={1080}
                alt="Foto Ajisaka Kamandanu"
            />
        </div>
        <div>
            <h2>About Me</h2>
            <h1>Hi, I’m Ajisaka Kamandanu</h1>
            <h3>A Developer Who Loves to Create</h3>
            <p>For me, coding is more than just writing lines of code. It's about solving problems, creating smooth experiences, and bringing ideas to life. I'm always excited to learn, adapt, and push the boundaries of my frontend development skills.</p>
            <p>Take a look at some of the projects I’ve worked on and see how I bring ideas to life."</p>
            <Button text="View My Work" link="/work"/>
        </div>
      </div>
    </section>
  );
}
