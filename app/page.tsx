"use client"
import styles from './page.module.css'
import Typewriter from 'typewriter-effect';

export default function Home() {
  return (
    <>
      <div className={styles.landingSectionFirst}>
        <div>Hello, Im <span className={styles.textLandingSpecial}>Kuba Musielski</span>,
        <Typewriter 
          options={{
            strings: ['javascript developer', 'react developer', 'nextjs developer'],
            autoStart: true,
            loop: true,
          }}
        /></div>
      </div>
    </>
  )
}
