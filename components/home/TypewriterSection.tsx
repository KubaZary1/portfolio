"use client"
import Typewriter from 'typewriter-effect'
import styles from './TypewriterSection.module.css'
export default function TypewriterSection() {
  return (<div className={styles.landingSectionFirst}>
    <div>Hello, Im <span className={styles.textLandingSpecial}>Kuba Musielski</span>,
    <Typewriter 
      options={{
        strings: ['javascript developer', 'react developer', 'nextjs developer'],
        autoStart: true,
        loop: true,
      }}
    /></div>
  </div>)
};
