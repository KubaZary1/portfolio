"use client"
import Typewriter from 'typewriter-effect'
import styles from './TypewriterSection.module.css'
import Link from 'next/link'
export default function TypewriterSection() {
  return (<div className={styles.landingSectionFirst}>
    <div>
      Hello, Im <span className={styles.textLandingSpecial}>Kuba Musielski</span>,
      <Typewriter
        options={{
          strings: ['javascript developer', 'react developer', 'nextjs developer'],
          autoStart: true,
          loop: true,
        }}
      />
      <Link draggable='false' href='/about' className={styles.aboutMeButton}>About me</Link>
    </div>
  </div>)
};
