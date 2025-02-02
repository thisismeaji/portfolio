import React from 'react';
import AboutSection from '@/components/section/about/AboutSection';
import SkillsSection from '@/components/section/skills/SkillsSection';
import ContactSection from '@/components/section/contact/ContactSection';

export const metadata = {
  title: 'About',
  description: 'As a fresh graduate, I possess a strong passion for frontend development, adaptability, and a great willingness to learn new technologies in the field of web development.',
   alternates: {
    canonical: 'https://thisismeaji.com/about'
}};

export default function About() {
  return (
    <>
      <AboutSection/>
      <SkillsSection/>
      <ContactSection/>
    </>
  );
}
