import React from 'react';
import AboutSection from '@/components/section/about/AboutSection';
import SkillsSection from '@/components/section/skills/SkillsSection';
import ContactSection from '@/components/section/contact/ContactSection';

export const metadata = {
  title: 'About',
  description: 'As a fresh graduate, I possess a strong passion for frontend development, adaptability, and a great willingness to learn new technologies in the field of web development.',
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
            "description": "As a fresh graduate, I possess a strong passion for frontend development, adaptability, and a great willingness to learn new technologies in the field of web development."
          })
        }}
      />
      <AboutSection />
      <SkillsSection />
      <ContactSection />
    </>
  );
}
