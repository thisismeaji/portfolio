"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Styles from "../navigation/navigation.module.css";

export default function Navigation() {
    const [menuActive, setMenuActive] = useState(false);

    const toggleMenu = () => {
        setMenuActive(!menuActive);
    };

    const closeMenu = () => {
        setMenuActive(false);
    };

    return (
        <nav className={Styles.nav}>
            <div className={Styles.logo}>
                <Link href="/">
                    <Image
                        src="/assets/images/logo-ajisakakamandanu.png"
                        alt="Logo Ajisaka Kamandanu"
                        width={1000}
                        height={1000}
                    />
                </Link>
            </div>
            <div className={`${Styles.listNav} ${menuActive ? Styles.active : ""}`}>
                <ul>
                    <Link href="/" onClick={closeMenu}>
                        <li>Home</li>
                    </Link>
                    <Link href="/about" onClick={closeMenu}>
                        <li>About</li>
                    </Link>
                    <Link href="/portfolio" onClick={closeMenu}>
                        <li>Portfolio</li>
                    </Link>
                    <Link href="/contact" onClick={closeMenu}>
                        <li>Contact</li>
                    </Link>
                </ul>
            </div>
            <Link href="/contact">
                <div className={Styles.status}>
                    <span></span>
                    <p>Available for projects</p>
                </div>
            </Link>
            <div className={Styles.menu} onClick={toggleMenu}>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <div className={`${Styles.overlay} ${menuActive ? Styles.overlayActive : ""}`} onClick={closeMenu}></div>
        </nav>
    );
}