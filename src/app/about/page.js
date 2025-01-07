import React from 'react';
import AboutSection from '@/components/section/about/AboutSection';
import SkillsSection from '@/components/section/skills/SkillsSection';

export default function About() {
  return (
    <>
      <section>
        <AboutSection/>
      </section>
      <section>
        <SkillsSection/>
      </section>
    </>
  );
}
