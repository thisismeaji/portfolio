import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Styles from "../bodybutton/bodybutton.module.css";

export default function BodyButton({ text, link}) {
  return (

    <Link href={link}>
      <button className={Styles.buttonOne}>
        {text}
        <Image
          src="/assets/arrowtwo.png"
          alt='Button Arrow'
          width={1000}
          height={2}
        />    
      </button>
    </Link>

  )
}
