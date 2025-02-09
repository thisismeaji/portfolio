import React from 'react';
import Styles from "../work/worksection.module.css";
import Image from 'next/image';

export default function WorkSection() {
  return (
    <section>
      <div className={Styles.work}>
        <h1>How I Work</h1>
        <p>I usually follow these four workflows to ensure the best results.</p>
        <div className={Styles.listWork}>
          <div className={Styles.card}>
            <div className={Styles.tittle}>
              <Image 
                src="/assets/icons/userflow.png"
                alt="User Flow"
                width={512}
                height={512}
              />
              <h4>User Flow</h4>
            </div>
            <div className={Styles.description}>
              <p>Mapping out user interactions to create an intuitive and seamless experience, ensuring smooth navigation through the website.</p>
            </div>
          </div>
          <div className={Styles.card}>
            <div className={Styles.tittle}>
              <Image 
                src="/assets/icons/wireframing.png"
                alt="Wireframing"
                width={512}
                height={512}
              />
              <h4>Wireframing</h4>
            </div>
            <div className={Styles.description}>
              <p>Creating a basic layout structure to serve as a visual guide for the design, outlining key elements and their placement.</p>
            </div>
          </div>
          <div className={Styles.card}>
            <div className={Styles.tittle}>
              <Image 
                src="/assets/icons/design.png"
                alt="Designe"
                width={512}
                height={512}
              />
              <h4>Design</h4>
            </div>
            <div className={Styles.description}>
              <p>Developing visually appealing and functional designs that enhance user experience, focusing on aesthetics, usability, and branding.</p>
            </div>
          </div>
          <div className={Styles.card}>
            <div className={Styles.tittle}>
              <Image 
                src="/assets/icons/development.png"
                alt="Development"
                width={512}
                height={512}
              />
              <h4>Development</h4>
            </div>
            <div className={Styles.description}>
              <p>Transforming the design into a fully functional website with optimal performance, ensuring cross-device compatibility and fast load times.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
