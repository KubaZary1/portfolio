import Link from "next/link";
import styles from "./Navbar.module.css"

export default function Navbar() {
  const navbarLinks = [
    {path: '/', name: "home"},
    {path: '/about', name: "about"},
  ]
  return (
    <nav className={styles.navbar}>
      <div><div className={styles.logo}>KUBA MUSIELSKI</div></div>
      <div>
        {navbarLinks.map((element, index)=> {
          return (<Link href={element.path} key={index}>{element.name.toUpperCase()}</Link>)
        })}
      </div>
    </nav>
  )
};
