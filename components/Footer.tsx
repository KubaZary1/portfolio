import styles from './Footer.module.css'
export default function Footer() {
  return(
    <footer className={styles.footer}>
      <div>This website was made by <span className={styles.footerSpecialText}>Kuba Musielski</span>&copy;</div>
    </footer>
  )
};
