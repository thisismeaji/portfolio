import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Styles from "../navigation/navigation.module.css";

export default function Navigation() {
  return (
    <nav className={Styles.nav}>
        <div className={Styles.logo}>
            <Image
                src="/images/logo.png"
                alt="Logo"
                width="1000"
                height="1000"
            />
        </div>
        <div className={Styles.navList}>
            <ul className={Styles.navDekstop}>
                <li>
                    <Link href="/">Home</Link>
                </li>
                <li>
                    <Link href="/about">About</Link>
                </li>
                <li>
                    <Link href="/portfolio">Portfolio</Link>
                </li>
                <li>
                    <Link href="/contact">Contact</Link>
                </li>
            </ul>
            <ul className={Styles.navMobile}>
                <li>
                    <Link href="/">Home</Link>
                </li>
                <li>
                    <Link href="/about">About</Link>
                </li>
                <li>
                    <Link href="/portfolio">Portfolio</Link>
                </li>
                <li>
                    <Link href="/contact">Contact</Link>
                </li>
            </ul>
        </div>
        <div className={Styles.menu}>
            <span></span>
            <span></span>
            <span></span>
        </div>
    </nav>
  );
}
