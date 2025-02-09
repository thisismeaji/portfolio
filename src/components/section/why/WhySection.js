import React from 'react';
import Styles from "../why/whysection.module.css";
import Image from 'next/image';

export default function WhySection() {
  return (
    <section>
      <div className={Styles.why}>
      <h1>Why Aji</h1>
        <p>I could give you a long list of my perks, but here’s the bottom line</p>
        <div className={Styles.listWhy}>
          <div className={Styles.card}>
            <div className={Styles.tittle}>
              <Image 
                src="/assets/icons/uc-design.png"
                alt="User-centric design"
                width={512}
                height={512}
              />
              <h4>User-centric design</h4>
            </div>
            <div className={Styles.description}>
              <p>I am committed to creating intuitive and seamless user experiences for all my projects.</p>
            </div>
          </div>
          <div className={Styles.card}>
            <div className={Styles.tittle}>
              <Image 
                src="/assets/icons/responsive-design.png"
                alt="Responsive Design"
                width={512}
                height={512}
              />
              <h4>Responsive Design</h4>
            </div>
            <div className={Styles.description}>
              <p>I ensure that every website looks great and functions perfectly on all devices, from desktops to smartphones.</p>
            </div>
          </div>
          <div className={Styles.card}>
            <div className={Styles.tittle}>
              <Image 
                src="/assets/icons/free-maintenance.png"
                alt="1-year free maintenance"
                width={512}
                height={512}
              />
              <h4>1-year free maintenance</h4>
            </div>
            <div className={Styles.description}>
              <p>Every website I build comes with a 1-year free maintenance guarantee to keep your site running smoothly.</p>
            </div>
          </div>
          <div className={Styles.card}>
            <div className={Styles.tittle}>
              <Image 
                src="/assets/icons/seo.png"
                alt="SEO-Friendly Structure"
                width={512}
                height={512}
              />
              <h4>SEO-Friendly Structure</h4>
            </div>
            <div className={Styles.description}>
              <p>I build websites with clean architecture optimized for search engines, helping your site rank better organically.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
