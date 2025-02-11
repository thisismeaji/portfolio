import React from 'react';
import PortfolioData from '@/data/work/WorkData';
import Styles from "../page.module.css";
import Button from '@/components/button/Button';
import ParticlesBackground from '@/components/background/ParticlesBackground';

export const metadata = {
  title: 'Work',
  description: 'This page showcases the best web projects I’ve worked on, reflecting my skills as a web developer in creating high-quality digital solutions.',
  alternates: {
    canonical: 'https://thisismeaji.com/work'
}};

export default function Work() {
  return (
      
    <>
    {/* Breadcrumb Schema */}
    <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://thisismeaji.com/"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Work",
                "item": "https://thisismeaji.com/work"
              }
            ]
          })
        }}
      />
      {/* Portfolio Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CreativeWork",
            "url": "https://thisismeaji.com/portfolio",
            "name": "Work",
            "description": "This page showcases the best web projects I’ve worked on, reflecting my skills as a web developer in creating high-quality digital solutions."
          })
        }}
      />
      <section className={Styles.workSection}>
        <ParticlesBackground/>
        <PortfolioData/>
        <div className={Styles.ctaWork}>
          <h1>Your website not here yet?</h1>
          <h2>Let's create it together!</h2>
          <Button text="Say Hi to me"/>
        </div>
      </section>
    </>
  
  );
}
