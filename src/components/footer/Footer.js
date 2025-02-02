import React from 'react';
import Styles from "../footer/footer.module.css";
import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className={Styles.footer}>
      <div>
        <div>
            <p>© 2025 Ajisaka Kamandanu. All Rights Reserved.</p>
        </div>
        <div>
            <p>Connect with me</p>
            <ul>
                <li>
                    <Link href="/instagram">
                        <Image
                            src="/assets/icons/instagram.png"
                            alt="Instagram Aji"
                            width={1000}
                            height={1000}
                        />
                    </Link>
                </li>
                <li>
                    <Link href="/facebook">
                        <Image
                            src="/assets/icons/facebook.png"
                            alt="facebook Aji"
                            width={1000}
                            height={1000}
                        />
                    </Link>
                </li>
                <li>
                    <Link href="/threads">
                        <Image
                            src="/assets/icons/threads.png"
                            alt="threads Aji"
                            width={1000}
                            height={1000}
                        />
                    </Link>
                </li>
                <li>
                    <Link href="/twitter">
                        <Image
                            src="/assets/icons/twitter.png"
                            alt="twitter Aji"
                            width={1000}
                            height={1000}
                        />
                    </Link>
                </li>
                <li>
                    <Link href="/linkedin">
                        <Image
                            src="/assets/icons/linkedin.png"
                            alt="linkedin Aji"
                            width={1000}
                            height={1000}
                        />
                    </Link>
                </li>
            </ul>
        </div>
      </div>
    </footer>
  )
}
