import React from 'react';
import Styles from "../hero/hero.module.css";
import Image from 'next/image';
import HeroButton from '@/components/button/herobutton/HeroButton';

export default function Hero() {
  return (
    <section className={Styles.hero}>
        <div className={Styles.heroText}>
          <h2>Web Developer</h2>
          <h1>Ajisaka Kamandanu</h1>
          <p>With over 2 years of experience in web development, I am ready to help you launch your first portfolio website.</p>
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
