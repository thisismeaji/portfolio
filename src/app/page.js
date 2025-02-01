import Hero from '@/components/section/hero/Hero';
import Introduction from '@/components/section/introduction/Introduction';
import React from 'react';

export const metadata = {
  title: 'Ajisaka Kamandanu',
  description: "Hi, I'm Aji, a Frontend Developer focused on creating responsive, intuitive, and user-friendly web interfaces. I enjoy turning ideas into engaging and functional digital experiences."
};


export default function Home() {
  return (
    <>
      <Hero />
      <Introduction/>
    </>
  );
}
