import React from 'react';
import Styles from "../work/workdata.module.css";
import Link from 'next/link';
import Image from 'next/image';

export default function WorkData() {
  const portfolioLinks = [
    { id: 1, url: "https://ellen-downing.vercel.app/" },
  ];
  return (
    <div className={Styles.work}>
        {portfolioLinks.map((item) => (
          <div key={item.id} className={Styles.itemItem}>
            <Link href={item.url} passHref>
              <Image 
                src={`/assets/images/portfolio${item.id}.png`}
                alt={`Portfolio ${item.id}`}
                width={500}
                height={300}
                className={Styles.image}
              />
            </Link>
          </div>
        ))}
    </div>
  );
}
