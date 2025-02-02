import React from 'react';
import Styles from "../quotes/quotes.module.css";

export default function Quotes() {
  return (
    <section className={Styles.quotesSection}>
        <div className={Styles.quotes}>
            <div className={Styles.quotesText}>
                <h1>“Design is not just what it looks like and feels like. Design is how it works.”</h1>
                <h3>Steve Jobs</h3>
                <p>Co-founder, Chairman, and CEO of Apple Inc.</p>
            </div>
        </div>
    </section>
  )
}
