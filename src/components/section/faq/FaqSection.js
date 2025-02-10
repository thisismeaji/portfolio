"use client";

import React, { useState } from "react";
import Styles from "../faq/faqsection.module.css";

const faqs = [
  {
    question: "What platform is the website built on?",
    answer:
      "The websites I create are built using Next.js, a React-based framework that is fast, lightweight, and optimized for performance and SEO.",
  },
  {
    question: "Is the website built using WordPress?",
    answer:
      "No, I do not use WordPress. I build custom websites with Next.js, which ensures better speed, security, and flexibility compared to WordPress-based websites.",
  },
  {
    question: "What features are available?",
    answer:
      "My portfolio websites include responsive design, a professional layout that aligns with your personal branding, SEO optimization, interactive animations, and social media integration. Additionally, dynamic pages such as projects, blogs, or testimonials can be added. If you need additional features, we can discuss them further.",
  },
  {
    question: "Does the package include hosting and a domain?",
    answer:
      "Yes, hosting and domain are included in the price. Hosting is provided through Vercel, which offers high-performance and reliable hosting for Next.js websites. The domain is purchased from GoDaddy or a domain provider in your country, ensuring you get a domain that suits your needs without additional hassle.",
  },
  {
    question: "Will my website be found on search engines?",
    answer:
      "Yes, I apply on-page SEO techniques, such as proper URL structuring, meta tags, and speed optimization, to help your website rank better on search engines like Google.",
  },
  {
    question: "Can I request a custom design based on my preferences?",
    answer:
      "Absolutely! The website design will be tailored to your preferences. You can provide references for your desired look, or I can recommend the best layout for your portfolio.",
  },
  {
    question: "How many projects can be displayed in the portfolio?",
    answer:
      "There is no limit to the number of projects you can display, but I recommend showcasing 5-10 of your best projects to keep the website engaging and lightweight.",
  },
  {
    question: "Can I request additional revisions beyond the initial agreement?",
    answer:
      "I offer revisions as per our initial agreement. If you need additional revisions beyond that, they can be done at an extra cost.",
  },
  {
    question: "What does the free 1-year maintenance include?",
    answer:
      "The free maintenance covers minor bug fixes, small content updates such as text or image changes, and website performance monitoring. However, major design changes or new feature additions are not included in the free maintenance.",
  },
  {
    question: "What if I want to add new features after the website is completed?",
    answer:
      "You can request additional features after the website is completed. The cost will be adjusted based on the complexity of the new features.",
  },
  {
    question: "What happens if I am not satisfied with the final result?",
    answer:
      "I ensure that the final product meets your needs by providing revisions based on our initial agreement. If there are any major concerns, we can discuss and find the best solution to achieve your desired outcome.",
  },
  {
    question: "How long does it take to complete the website?",
    answer:
      "The completion time depends on the complexity of the website. For a one-page portfolio, the project takes only 3 days, while a multi-page portfolio takes approximately one week. If you have a specific deadline, we can discuss it further.",
  },
  {
    question: "Will I have full access to the website once it is completed?",
    answer:
      "Yes, once the website is completed, you will have full access to the source code and hosting account (on Vercel), allowing you to manage it on your own if needed.",
  },
  {
    question: "How can I update and manage content on my website?",
    answer:
      "Since I build static websites without a backend, content updates can be done by editing the files on GitHub or by reaching out to me for assistance. If you need a more flexible content management system, I can integrate a CMS such as Sanity or Strapi for an additional cost.",
  },
  {
    question: "Are there any additional costs after the website is completed?",
    answer:
      "There are no extra costs unless you request significant changes or new features. Any additional services will be priced based on the complexity of the request.",
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
              <h4>{faq.question}</h4>
              <p>{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
