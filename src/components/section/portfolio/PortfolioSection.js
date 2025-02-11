import React from 'react';
import Styles from "../portfolio/portfoliosection.module.css";
import Button from '@/components/button/Button';
import WorkData from '@/data/work/WorkData';

export default function PortfolioSection() {

  return (
    <section>
      <WorkData/>
      <Button text="View My Portfolio" link="/work"/>
    </section>
  );
}
