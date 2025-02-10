import React from 'react';
import Styles from "../pricing/pricingsection.module.css";
import Button from '@/components/button/Button';

export default function PricingSection() {
  return (
    <section>
        <div className={Styles.pricing}>
            <h1>Pricing</h1>
            <p>Explore our pricing options and find the perfect plan for your project. Affordable and transparent pricing with no hidden fees.</p>
            <div className={Styles.listPricing}>
                <div className={Styles.card}>
                    <h4>One Page Portfolio</h4>
                    <div>
                        <h2>USD 100</h2>
                        <ul>
                            <li>Ideal for your first portfolio website</li>
                            <li>About, Contact, & Portfolio on One Page</li>
                            <li>Responsive design</li>
                            <li>Basic SEO</li>
                            <li>Performance Optimization (Faster load speed)</li>
                            <li>SSL Certificate (HTTPS Security)</li>
                            <li>Social Media Integration (LinkedIn, Twitter, etc.)</li>
                            <li>Form contact to Email / WhatsApp etc.</li>
                            <li>Free Domain .Com</li>
                            <li>Free Hosting / Server on Vercel</li>
                            <li>Ready in 3 Days</li>
                            <li>Max 3 revisions included</li>
                        </ul>
                    </div>
                    <Button text="Book" link="/"/>
                </div>
                <div className={Styles.card}>
                    <h4>Multiple Page Portfolio</h4>
                    <div>
                        <h2>USD 200</h2>
                        <ul>
                            <li>Perfect for professionals with many projects.</li>
                            <li>Every benefit of One Page Portfolio</li>
                            <li>Up to 4 Page</li>
                            <li>Advanced SEO</li>
                            <li>Integration with Google Analytics and Google Search Console</li>
                            <li>Ready in 1 week</li>
                            <li>Max 5 revisions included</li>
                        </ul>
                    </div>
                    <Button text="Book" link="/"/>
                </div>
            </div>
        </div>
    </section>
  );
}
