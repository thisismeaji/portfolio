import ParticlesBackground from '@/components/background/ParticlesBackground';
import AboutSection from '@/components/section/about/AboutSection';
import EducationSection from '@/components/section/education/EducationSection';
import HobbiesSection from '@/components/section/hobbies/HobbiesSection';
import SkillsSection from '@/components/section/skills/SkillsSection';
import React from 'react';
import Styles from "../page.module.css";
import Button from '@/components/button/Button';

export const metadata = {
  title: 'About',
  description: "For me, coding is more than just writing lines of code. It's about solving problems, creating smooth experiences, and bringing ideas to life.",
  alternates: {
    canonical: 'https://thisismeaji.com/about'
  }
};


export default function About() {
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
                "name": "About",
                "item": "https://thisismeaji.com/about"
              }
            ]
          })
        }}
      />
      {/* WebPage Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "About",
            "url": "https://thisismeaji.com/about",
            "description": "For me, coding is more than just writing lines of code. It's about solving problems, creating smooth experiences, and bringing ideas to life."
          })
        }}
      />
      <ParticlesBackground/>
      <AboutSection/>
      <div>
        <SkillsSection/>
      </div>
      <EducationSection/>
      <HobbiesSection/>
      <section className={Styles.ctaSection}>
      <div className={Styles.ctaAbout}>
        <h2>What are you waiting for?</h2>
        <h1>Let’s Create Something Amazing Together</h1>
        <p>If you’re interested in collaborating or have any questions, feel free to reach out! I’d love to bring your ideas to life.</p>
        <Button text="Work With Me" link="/contact"/>
      </div>
      </section>
    </>
  );
}
