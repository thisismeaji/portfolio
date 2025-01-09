import ContactSection from '@/components/section/contact/ContactSection';
import React from 'react';

export const metadata = {
  title: 'Contact Me',
  description: 'Feel free to reach out! Whether you have questions or want to collaborate, I’m always open to connecting with others in the tech community.',
};

export default function Contact() {
  return (
    <section>
      <ContactSection/>
    </section>
  );
}
