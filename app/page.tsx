import styles from './page.module.css'
export default function Home() {
  return (
    <>
      <div className={styles.landingSectionFirst}>
        <div>Hello, Im <span className={styles.textLandingSpecial}>Kuba Musielski</span>, javascript developer.</div>
      </div>
    </>
  )
}
