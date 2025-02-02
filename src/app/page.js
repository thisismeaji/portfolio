import ContactSection from '@/components/section/contact/ContactSection';
import Hero from '@/components/section/hero/Hero';
import Introduction from '@/components/section/introduction/Introduction';
import PortfolioSection from '@/components/section/portfolio/PortfolioSection';
import Quotes from '@/components/section/quotes/Quotes';
import React from 'react';

export const metadata = {
  title: 'Ajisaka Kamandanu',
  description: "Hi, I'm Aji, a Frontend Developer focused on creating responsive, intuitive, and user-friendly web interfaces. I enjoy turning ideas into engaging and functional digital experiences.",
  alternates: {
    canonical: 'https://thisismeaji.com/'
  }};

export default function Home() {
  return (
    <>
      <Hero />
      <Introduction />
      <PortfolioSection />
      <Quotes />
      <ContactSection />
    </>
  );
}
