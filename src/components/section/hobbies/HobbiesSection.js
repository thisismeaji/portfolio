import React from 'react';
import Styles from "../hobbies/hobbiessection.module.css";

export default function HobbiesSection() {
  return (
    <section>
        <div className={Styles.hobbies}>
            <h2>My Hobbies</h2>
            <h1>Life Beyond the Screen</h1>
            <h3>Finding Joy in Simple Moments</h3>
            <p>Beyond work, I enjoy immersing myself in stories, exploring new worlds, and seeking inspiration from different forms of creativity. These little escapes help me recharge and keep my imagination alive.</p>
            <div>
              <span>Watching Series</span>
              <span>Watching Anime</span>
              <span>Watching Films</span>
              <span>Listening to Music</span>
              <span>Playing Games</span>
              <span>Writing (Blog & Stories)</span>
            </div>
        </div>
    </section>
  )
}
