import ContactSection from '@/components/section/contact/ContactSection';
import React from 'react';

export const metadata = {
  title: 'Contact',
  description: 'Reach out and let’s build something great! and Explore the ways to connect with me,',
  alternates: {
    canonical: 'https://thisismeaji.com/contact'
}};

export default function Contact() {
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
                "item": "https://thisismeaji.com/contact"
              }
            ]
          })
        }}
      />
      <ContactSection/>
    </>
  );
}
