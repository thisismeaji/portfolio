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
          <p>A collection of projects showcasing my skills and dedication in frontend development.</p>
        </div>
        <div className={Styles.listProject}>
          <Projects/>
        </div>
      </section>
      <ServiceSection/>
    </>
  );
}
