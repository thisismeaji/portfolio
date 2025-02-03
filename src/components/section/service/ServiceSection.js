import React from 'react';
import Styles from "../service/service.module.css";
import BodyButton from '@/components/button/bodybutton/BodyButton';

export default function ServiceSection() {
  return (
    <section className={Styles.serviceSection}>
      <div className={Styles.section}>
        <div className={Styles.serviceText}>
            <h2>Do You Need a Website Portfolio?</h2>
            <p>If you're ready to create a portfolio that truly reflects your skills and passion, I'm here to help. I offer custom website design and development tailored to your professional needs.</p>
            <h3>Services I Offer:</h3>
            <ul>
                <li>Custom Portfolio Design</li>
                <li>Responsive and Mobile-Friendly Websites</li>
                <li>SEO-Optimized</li>
                <li>Fast, Reliable, and Powered by the Latest Tech</li>
            </ul>
        </div>
        <div className={Styles.serviceCTA}>
            <h1>It’s Time to Build Your Standout Portfolio!</h1>
            <p>Click below to share your ideas and get started on creating an amazing online portfolio with me.</p>
            <BodyButton text="Let’s Talk" link="/contact"/>
        </div>
      </div>
    </section>
  )
}
