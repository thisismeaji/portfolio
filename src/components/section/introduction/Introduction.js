import React from 'react';
import Styles from "../introduction/introduction.module.css";
import Image from 'next/image';
import BodyButton from '@/components/button/bodybutton/BodyButton';

export default function Introduction() {
  return (
    <section className={Styles.introduction}>
      <div className={Styles.introductionText}>
        <h2>A Little About Me</h2>
        <h1>It feels so rewarding when I successfully turn a design into code.</h1>
        <BodyButton text="Learn More" link="/about"/>
      </div>
    </section>
  );
}
