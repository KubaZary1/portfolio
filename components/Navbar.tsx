"use client";

import Link from "next/link";
import styles from "./Navbar.module.css"
import { useState } from "react";
import buttonMenuIcon from "../public/menu.svg"
import Image from "next/image";

export default function Navbar() {
  const [navbarMobileState, setNavbarMobileState] = useState(false)
  const navbarLinks = [
    {path: '/', name: "home"},
    {path: '/about', name: "about"},
  ]
  return (
    <>
    <nav className={navbarMobileState ? `${styles.navbar} ${styles.navbarEnabled}` : styles.navbar}>
      <div><div className={styles.logo}>KUBA MUSIELSKI</div></div>
      <div className={styles.links}>
        {navbarLinks.map((element, index)=> {
          return (<Link onClick={() => setNavbarMobileState(false)} href={element.path} key={index}>{element.name.toUpperCase()}</Link>)
        })}
      </div>
    </nav>
    <button type="button" className={styles.mobileNavbarButton} onClick={() => setNavbarMobileState(prev => !prev)} title="toggle navbar"><Image className={styles.buttonIcon} src={buttonMenuIcon} alt="MENU"/></button>
    </>
  )
};
