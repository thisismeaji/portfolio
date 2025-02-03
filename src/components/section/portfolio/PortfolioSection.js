import React from 'react';
import Styles from "../portfolio/portfolio.module.css";
import Projects from '@/data/projects/Projects';
import ServiceSection from '../service/ServiceSection';

export default function PortfolioSection() {
  return (
    <>
      <section className={Styles.portfolio}>
        <div className={Styles.mainPortfolio}>
          <h2>My Portfolio</h2>
          <p>In this section, you will find various portfolio website projects I have created. Each project reflects my approach to developing responsive, aesthetic, and functional websites, with a focus on the needs and vision of the client.</p>
        </div>
        <div className={Styles.listProject}>
          <Projects/>
        </div>
      </section>
    </>
  );
}
