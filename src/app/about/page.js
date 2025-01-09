import React from 'react';
import AboutSection from '@/components/section/about/AboutSection';
import SkillsSection from '@/components/section/skills/SkillsSection';

export const metadata = {
  title: 'About Me',
  description: 'I am Aji, a fresh graduate with a passion for technology, eager to learn and grow. Discover my skills, education, certifications, and experiences as I embark on my professional journey.',
};

export default function About() {
  return (
    <>
      <AboutSection/>
      <SkillsSection/>
    </>
  );
}
