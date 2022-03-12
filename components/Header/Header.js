import React, {useState} from 'react';
import Link from 'next/Link'
import styles from './header.module.css'
import Image from 'next/image'

export default function Header() {
  const [showMenu, setShowMenu] = useState(false);
  const toggleMenu = showMenu ? styles.list : styles.listClose;
  const toggleMenuNav = showMenu ? styles.navOpen : styles.nav;
  
  return (
    <nav className={toggleMenuNav}>
      <Link href="/"> 
        <h4>SciQuel</h4>
      </Link>
<<<<<<< HEAD
      
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

=======

      <Link href="/">
        <a>Read</a>
      </Link>

      <Link href="/">
        <a>Topic</a>
      </Link>

      <Link href="/">
        <a>About</a>
      </Link>
      
>>>>>>> 8123e24752a66d1abfcfab0ac38d76e0713e946f
      <form className={styles.search}>
        <input className={styles.input} placeholder="Search Sciquel" />
      </form>
      
      <Link href="/">
        <a>Sign in</a>
      </Link>

      <div className={styles.menu} onClick={() => setShowMenu(!showMenu)}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </nav>
  )
}
