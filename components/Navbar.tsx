import Link from "next/link";
import style from "./Navbar.module.css"

export default function Navbar() {
  const navbarLinks = [
    {path: '/', name: "home"},
    {path: '/about', name: "about"},
  ]
  return (
    <nav className={style.navbar}>
      <div className="left">KUBA MUSIELSKI</div>
      <div className="right">
        {navbarLinks.map((element, index)=> {
          return (<Link href={element.path} key={index}>{element.name.toUpperCase()}</Link>)
        })}
      </div>
    </nav>
  )
};
