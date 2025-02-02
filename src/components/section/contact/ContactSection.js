'use client';

import React, { useState } from 'react';
import Styles from "../contact/contact.module.css";
import BodyButton from '@/components/button/bodybutton/BodyButton';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    subject: '',
    email: '',
    message: ''
  });

  const [activeField, setActiveField] = useState(null); // Untuk melacak input yang sedang fokus

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFocus = (fieldName) => {
    setActiveField(fieldName);
  };

  const handleBlur = (fieldName) => {
    if (formData[fieldName] === '') {
      setActiveField(null);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); 
    alert('Message sent successfully!');
    setFormData({ name: '', subject: '', email: '', message: '' }); 
    setActiveField(null);
  };

  return (
    <section className={Styles.contactSection}>
      <div>
        <h1>Get in Touch</h1>
        <p>Reach out and let’s build something great!</p>
      </div>
      <div className={Styles.contact}>
        <div className={Styles.contactInfo}>
          <h2>Contact Information</h2>
          <p>Explore the ways to connect with me,</p>
          <h4>Address</h4>
          <p>Purworejo, Central Java, Indonesia</p>
          <h4>Phone Number / Whatsapp</h4>
          <p>+628 979 111 521</p>
          <h4>Email</h4>
          <p>thisismeaji20@gmail.com</p>
        </div>

        <div className={Styles.contactForm}>
          <form onSubmit={handleSubmit}>
            <div>
              <p>Name</p>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                onFocus={() => handleFocus('name')}
                onBlur={() => handleBlur('name')}
                placeholder={activeField === 'name' ? '' : 'enter your name'}
                required
              />
            </div>

            <div>
              <p>Subject</p>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                onFocus={() => handleFocus('subject')}
                onBlur={() => handleBlur('subject')}
                placeholder={activeField === 'subject' ? '' : 'enter a subject'}
                required
              />
            </div>

            <div>
              <p>Email</p>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                onFocus={() => handleFocus('email')}
                onBlur={() => handleBlur('email')}
                placeholder={activeField === 'email' ? '' : 'enter your email'}
                required
              />
            </div>

            <div>
              <p>Message</p>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                onFocus={() => handleFocus('message')}
                onBlur={() => handleBlur('message')}
                placeholder={activeField === 'message' ? '' : 'how i can help you today'}
                required
              ></textarea>
            </div>
            <div>
              <BodyButton text="Submit" link="/submit"/>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
