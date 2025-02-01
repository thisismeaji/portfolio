"use client";

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Styles from "../navigation/navigation.module.css";

export default function Navigation() {
    const [isNavActive, setIsNavActive] = useState(false);

    // Fungsi untuk toggle menu
    const toggleNav = () => {
        setIsNavActive((prev) => !prev);
    };

    // Fungsi untuk close menu
    const handleClose = () => {
        setIsNavActive(false);
    };

    // Fungsi untuk close menu sebelum navigasi
    const handleNavLinkClick = (href) => {
        setIsNavActive(false);
    };

    return (
        <nav className={Styles.nav}>
            <Link href="/">
                <div className={Styles.logo}>
                    <Image
                        src="/images/logo.png"
                        alt="Logo"
                        width="1000"
                        height="1000"
                    />
                </div>
            </Link>
            <div className={Styles.navList}>
                {/* Desktop Navigation */}
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

                {/* Mobile Navigation */}
                <ul className={`${Styles.navMobile} ${isNavActive ? Styles.navActive : ""}`}>
                    <li>
                        <Link href="/" onClick={handleNavLinkClick}>Home</Link>
                    </li>
                    <li>
                        <Link href="/about" onClick={handleNavLinkClick}>About</Link>
                    </li>
                    <li>
                        <Link href="/portfolio" onClick={handleNavLinkClick}>Portfolio</Link>
                    </li>
                    <li>
                        <Link href="/contact" onClick={handleNavLinkClick}>Contact</Link>
                    </li>
                    {/* Tombol Close */}
                    <li className={Styles.closeButton} onClick={handleClose}>×</li>
                </ul>

                {/* Overlay */}
                {isNavActive && <div className={Styles.overlay} onClick={handleClose}></div>}
            </div>

            {/* Menu Button */}
            <div className={Styles.menu} onClick={toggleNav}>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </nav>
    );
}
