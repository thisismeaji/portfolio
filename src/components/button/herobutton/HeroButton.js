import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Styles from "../herobutton/herobutton.module.css";

export default function Button({ text, link}) {
  return (

    <div className={Styles.btn}>
        <Link href={link}>
            <button className={Styles.buttonOne}>
                {text}
                <Image
                src="/images/arrowone.png"
                alt='Button Arrow'
                width={1000}
                height={2}
            />    
            </button>
        </Link>
    </div>

  )
}
