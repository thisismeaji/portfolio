import React from 'react';
import Styles from "../hero/herosection.module.css";
import Button from '@/components/button/Button';

export default function HeroSection() {
  return (
    <section>
        <div className={Styles.hero}>
          <h1>It’s Time to Build a Portfolio Website That Leaves a Lasting Impression!</h1>
          <p>Click below to share your ideas and get started on creating an amazing online portfolio with me.</p>
          <Button text="Let's Talk" link="/contact"/>
        </div>
    </section>
  );
}
