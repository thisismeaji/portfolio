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
    <section>
      <ContactSection/>
    </section>
  );
}
