import React from 'react';
import Styles from "../hero/hero.module.css";
import Image from 'next/image';
import HeroButton from '@/components/button/herobutton/HeroButton';

export default function Hero() {
  return (
    <section className={Styles.hero}>
        <div className={Styles.heroText}>
          <h2>Frontend Developer</h2>
          <h1>Ajisaka Kamandanu</h1>
          <p>Hi, I'm Aji, a Frontend Developer focused on creating responsive, intuitive, and user-friendly web interfaces.</p>
          <HeroButton text="My Portfolio" link="/portfolio"/>
        </div>
        <div className={Styles.heroImage}>
          <Image
            src="/assets/profile.png"
            alt="Logo"
            width="1000"
            height="1000"
          />
        </div>
    </section>
  );
}
