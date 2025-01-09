'use client';

import Styles from "../contact/contact.module.css";
import { useState } from 'react';

export default function ContactSection() {
  const [firstName, setFirstName] = useState('');
  const [secondName, setSecondName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle the form submission here
    console.log('Form submitted:', { firstName, secondName, phoneNumber, message });
  };

  return (
    <div className={Styles.contactSection}>
      <h1>Get In Touch</h1>
      <p>Feel free to reach out for collaborations, projects, or simply to connect. I’m always open to hearing from you and offering my assistance.</p>
      <div>
        <div>
          <h4>Address</h4>
          <p>Find my location</p>
          <button>View on Map</button>
        </div>
        <div>
          <h4>Phone</h4>
          <p>Talk with me</p>
          <button>Call me Directly</button>
        </div>
        <div>
          <h4>Email</h4>
          <p>Send me a message</p>
          <button>Send Email</button>
        </div>
      </div>
      <div>
        <p>Or</p>
      </div>
      <div>
        <h2>Message Me</h2>
        <p>I will respond to your message within 24 hours.</p>
        <form onSubmit={handleSubmit}>
          <div>
            <div>
              <p>First Name</p>
              <input
                type="text"
                id="firstName"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
              />
            </div>
            <div>
              <p>Second Name</p> {/* Corrected label */}
              <input
                type="text"
                id="secondName"
                value={secondName}
                onChange={(e) => setSecondName(e.target.value)}
                required
              />
            </div>
            <div>
              <p>Phone Number</p>
              <input
                type="number"
                id="phoneNumber"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                required
              />
            </div>
            <div>
              <p>Message</p>
              <textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              />
            </div>
            <button type="submit">Send</button>
          </div>
        </form>
      </div>
    </div>
  );
}
