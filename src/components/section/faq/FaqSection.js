"use client";

import React, { useState } from "react";
import Styles from "../faq/faqsection.module.css";

const faqs = [
  {
    question: "What platform is the website built on?",
    answer:
      "I build websites using Next.js, a React-based framework known for its speed, lightweight structure, and optimization for performance and SEO.",
  },
  {
    question: "Is the website built using WordPress?",
    answer:
      "No, I don't use WordPress. I create custom websites with Next.js, which offers better speed, security, and flexibility compared to WordPress-based websites.",
  },
  {
    question: "What features are included?",
    answer:
      "My portfolio websites come with a responsive design, a professional layout that aligns with your personal brand, SEO optimization, interactive animations, and social media integration. You can also add dynamic pages such as projects, blogs, or testimonials. If you need additional features, we can discuss them further.",
  },
  {
    question: "Does the package include hosting and a domain?",
    answer:
      "Yes, hosting and a domain are included in the package. Hosting is provided through Vercel, ensuring high performance and reliability for Next.js websites. The domain is purchased from GoDaddy or a provider in your country to suit your needs without extra hassle.",
  },
  {
    question: "Will my website be searchable on Google?",
    answer:
      "Yes, I apply on-page SEO techniques such as proper URL structuring, meta tags, and speed optimization to improve your website's ranking on search engines like Google.",
  },
  {
    question: "Can I request a custom design?",
    answer:
      "Absolutely! The website design will be tailored to your preferences. You can share references, or I can recommend the best layout for your portfolio.",
  },
  {
    question: "How many projects can I showcase in my portfolio?",
    answer:
      "There's no limit, but I recommend displaying 5-10 of your best projects to keep the website engaging and fast.",
  },
  {
    question: "Can I request additional revisions beyond the initial agreement?",
    answer:
      "I offer revisions as per our initial agreement. If you need more, additional revisions can be done for an extra cost.",
  },
  {
    question: "What does the free 1-year maintenance include?",
    answer:
      "The free maintenance covers minor bug fixes, small content updates like text or image changes, and performance monitoring. Major design changes or new feature additions are not included.",
  },
  {
    question: "Can I add new features after the website is completed?",
    answer:
      "Yes, you can request new features after the website is completed. The cost will depend on the complexity of the request.",
  },
  {
    question: "What if I'm not satisfied with the final result?",
    answer:
      "I ensure the final product meets your expectations by offering revisions based on our agreement. If you have concerns, we can discuss solutions to achieve your desired outcome.",
  },
  {
    question: "How long does it take to complete the website?",
    answer:
      "The timeline depends on the complexity of the website. A one-page portfolio takes about 3 days, while a multi-page portfolio takes around a week. If you have a specific deadline, we can discuss it.",
  },
  {
    question: "Will I have full access to my website after it's completed?",
    answer:
      "Yes, once the website is completed, you'll have full access to the source code and hosting account (on Vercel), allowing you to manage it as needed.",
  },
  {
    question: "How can I update and manage content on my website?",
    answer:
      "Since I build static websites without a backend, updates can be done by editing files on GitHub or contacting me for assistance. If you need an easier content management system, I can integrate a CMS like Sanity or Strapi for an additional cost.",
  },
  {
    question: "Are there any additional costs after the website is completed?",
    answer:
      "No extra costs unless you request significant changes or new features. Any additional services will be priced based on the complexity of your request.",
  },
];


export default function FaqSection() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleActive = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section>
      <div className={Styles.faq}>
        <h1>Faq</h1>
        <p>Find answers to the most common questions. If you need more information, don't hesitate to reach out!</p>
        <div>
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`${Styles.card} ${activeIndex === index ? Styles.active : ""}`}
              onClick={() => toggleActive(index)}
            >
              <p>{faq.question}</p>
              <p>{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
