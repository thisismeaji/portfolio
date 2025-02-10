"use client";

import { useState } from "react";
import emailjs from "emailjs-com";
import Styles from "../contact/contactsection.module.css";
import Button from "@/components/button/Button";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    subject: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("Sending...");

    emailjs
      .send(
        "service_dlbb4bq", // Ganti dengan Service ID dari EmailJS
        "template_wc1vz1i", // Ganti dengan Template ID dari EmailJS
        formData,
        "uGT73uo7LkH3JcB2m" // Ganti dengan Public Key dari EmailJS
      )
      .then(
        (response) => {
          console.log("Success!", response.status, response.text);
          setStatus("Message sent successfully!");
          setFormData({ name: "", subject: "", email: "", message: "" });
        },
        (err) => {
          console.error("Failed to send message.", err);
          setStatus("Failed to send message.");
        }
      );
  };

  return (
    <section>
      <div className={Styles.contact}>
        <h1>Get in Touch</h1>
        <p>Got questions or ideas? Get in touch, and let's discuss how we can collaborate!</p>
        <div className={Styles.contactForm}>
          <form onSubmit={handleSubmit} className="contact-form">
            <label htmlFor="name">Name :</label>
            <input
              id="name"
              type="text"
              name="name"
              placeholder="enter your name"
              value={formData.name}
              onChange={handleChange}
              required
            />

            <label htmlFor="subject">Subject :</label>
            <input
              id="subject"
              type="text"
              name="subject"
              placeholder="enter a subject"
              value={formData.subject}
              onChange={handleChange}
              required
            />

            <label htmlFor="email">Email :</label>
            <input
              id="email"
              type="email"
              name="email"
              placeholder="enter your email"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <label htmlFor="message">Message :</label>
            <textarea
              id="message"
              name="message"
              placeholder="how I can help you today"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>

            <Button type="submit" text="Send"/>
            {status && <p>{status}</p>}
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
