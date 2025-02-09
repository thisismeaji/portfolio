import React from 'react';
import Styles from "../introduction/introductionsection.module.css";
import Button from '@/components/button/Button';

export default function IntroductionSection() {
  return (
    <section>
      <div className={Styles.introduction}>
        <h3>A little bit about me</h3>
        <h1>I feel proud when I can turn a design into code.</h1>
        <p>Want to know more about me?</p>
        <Button text="Let's Go !" link="/about"/>
      </div>
    </section>
  );
}
