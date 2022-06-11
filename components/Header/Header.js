import React, { useEffect, useState } from "react";
import Link from "next/Link";
import styles from "./Header.module.css";

export default function Header() {
  const [showMenu, setShowMenu] = useState(false);
  const toggleMenu = showMenu ? styles.list : styles.listClose;
  const toggleMenuNav = showMenu ? styles.navOpen : styles.nav;

  function windowWidth() {

    useEffect(() => {
      const handleResize = () => {
        if(window.innerWidth >=750){
          setShowMenu(false)
        }
      }
      window.addEventListener('resize', handleResize)
    }, [])
  }

  windowWidth()

  return (
    <nav className={toggleMenuNav}>
      <Link href="/">
        <h4>SciQuel</h4>
      </Link>

      <div className={toggleMenu}>
        <Link href="/">
          <a>Latest</a>
        </Link>

        <Link href="/">
          <a>Read</a>
        </Link>

        <Link href="/">
          <a>Topic</a>
        </Link>

        <Link href="/">
          <a>About</a>
        </Link>
      </div>

      <form className={styles.search}>
        <input className={styles.input} placeholder="Search Sciquel" />
      </form>

      <Link href="/">
        <a className={styles.loginLink}>Login</a>
      </Link>

      <div className={styles.menu} onClick={() => setShowMenu(!showMenu)}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </nav>
  );
}
