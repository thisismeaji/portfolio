import ContactSection from '@/components/section/contact/ContactSection';
import PortfolioSection from '@/components/section/portfolio/PortfolioSection';
import React from 'react';

export const metadata = {
  title: 'Portfolio',
  description: 'A collection of projects showcasing my skills and dedication in frontend development.',
  alternates: {
    canonical: 'https://thisismeaji.com/portfolio'
}};

export default function Projects() {
  return (
      
    <>
      <PortfolioSection/>
      <ContactSection/>
    </>
  
  );
}
