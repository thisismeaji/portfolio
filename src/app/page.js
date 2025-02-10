import Hero from '@/components/section/hero/HeroSection';
import React from 'react';
import Head from 'next/head';
import PortfolioSection from '@/components/section/portfolio/PortfolioSection';
import WorkSection from '@/components/section/work/WorkSection';
import WhySection from '@/components/section/why/WhySection';
import IntroductionSection from '@/components/section/introduction/IntroductionSection';
import PricingSection from '@/components/section/pricing/PricingSection';
import FaqSection from '@/components/section/faq/FaqSection';

export const metadata = {
  title: 'Ajisaka Kamandanu',
  description: "Hi, I'm Aji, a Frontend Developer focused on creating responsive, intuitive, and user-friendly web interfaces.",
  alternates: {
    canonical: 'https://thisismeaji.com/'
  }
};

export default function Home() {
  return (
    <>
      {/* Website Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Website", 
            "url": "https://thisismeaji.com/",
            "name": "Ajisaka Kamandanu - Frontend Developer",
            "description": "Hi, I'm Aji, a Frontend Developer focused on creating responsive, intuitive, and user-friendly web interfaces."
          })
        }}
      />
      
      {/* Person Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Ajisaka Kamandanu",
            "jobTitle": "Frontend Developer",
            "url": "https://thisismeaji.com/",
            "image": "https://thisismeaji.com/public/assets/profile.png",
            "sameAs": [
              "https://www.instagram.com/thisisme_aji/",
              "https://www.facebook.com/profile.php?id=100090748616081",
              "https://www.threads.net/@thisisme_aji",
              "https://x.com/thisismeaji"
            ],
            "description": "Ajisaka Kamandanu is a Frontend Developer focused on creating responsive and user-friendly web interfaces."
          })
        }}
      />
      
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
              }
            ]
          })
        }}
      />
      
      {/* Open Graph Meta Tags */}
      <Head>
        <meta property="og:title" content="Ajisaka Kamandanu - Frontend Developer" />
        <meta property="og:description" content="Hi, I'm Aji, a Frontend Developer focused on creating responsive, intuitive, and user-friendly web interfaces." />
        <meta property="og:image" content="https://thisismeaji.com/images/profile.jpg" />
        <meta property="og:url" content="https://thisismeaji.com/" />
      </Head>

      <Hero />
      <PortfolioSection/>
      <WhySection/>
      <IntroductionSection/>
      <WorkSection/>
      <PricingSection/>
      <FaqSection/>
    </>
  );
}
