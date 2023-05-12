"use client";

import {IoEllipsisVertical} from "react-icons/io5"
import Link from "next/link";
import styles from "./Navbar.module.css"
import { useState } from "react";

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
    <button type="button" className={styles.mobileNavbarButton} onClick={() => setNavbarMobileState(prev => !prev)} title="toggle navbar"><IoEllipsisVertical /></button>
    </>
  )
};
