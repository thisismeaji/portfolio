"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Styles from "../navigation/navigation.module.css";

export default function Navigation() {
  const [menuActive, setMenuActive] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true); // Set true once the component has mounted on the client
  }, []);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  const closeMenu = () => {
    setMenuActive(false);
  };

  if (!isMounted) {
    return null; // Prevent rendering until after the component is mounted
  }

  return (
    <nav className={Styles.nav}>
      <div className={Styles.logo}>
        <Link href="/">
          <Image
            src="/assets/images/logo.png"
            alt="Logo Ajisaka Kamandanu"
            width={1000}
            height={1000}
          />
        </Link>
      </div>
      <div className={`${Styles.listNav} ${menuActive ? Styles.active : ""}`}>
        <ul>
          <li>
            <Link href="/" onClick={closeMenu}>
              home
            </Link>
          </li>
          <li>
            <Link href="/about" onClick={closeMenu}>
              About
            </Link>
          </li>
          <li>
            <Link href="/work" onClick={closeMenu}>
              Work
            </Link>
          </li>
          <li>
            <Link href="/contact" onClick={closeMenu}>
              Contact
            </Link>
          </li>
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
      <div
        className={`${Styles.overlay} ${menuActive ? Styles.overlayActive : ""}`}
        onClick={closeMenu}
      ></div>
    </nav>
  );
}
