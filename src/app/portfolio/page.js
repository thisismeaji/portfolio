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
                "item": "https://thisismeaji.com/portfolio"
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
            "name": "Portfolio",
            "description": "A collection of projects showcasing my skills and dedication in frontend development."
          })
        }}
      />
      <PortfolioSection/>
      <ContactSection/>
    </>
  
  );
}
