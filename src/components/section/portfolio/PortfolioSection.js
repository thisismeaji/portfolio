import React from 'react';
import Styles from "../portfolio/portfoliosection.module.css";
import Image from 'next/image';
import Link from 'next/link';
import Button from '@/components/button/Button';

export default function PortfolioSection() {
  const portfolioLinks = [
    { id: 1, url: "/project-1" },
    { id: 2, url: "/project-2" },
    { id: 3, url: "/project-3" },
    { id: 4, url: "/project-4" },
  ];

  return (
    <section>
      <div className={Styles.portfolio}>
        {portfolioLinks.map((item) => (
          <div key={item.id} className={Styles.itemItem}>
            <Link href={item.url} passHref>
              <Image 
                src={`/assets/images/portfolio${item.id}.png`}
                alt={`Portfolio ${item.id}`}
                width={1920}
                height={1080}
                className={Styles.image}
              />
            </Link>
          </div>
        ))}
      </div>
      <Button text="Show all" link="/portfolio"/>
    </section>
  );
}
