import Link from 'next/link'
import styles from './header.module.css'
import Image from 'next/image'

export default function Header() {
  return (
    <nav className={styles.nav}>
      <Link href="/"> 
        <a>SciQuel</a> 
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
      
      <form className={styles.search}>
        <input className={styles.input} placeholder="Search Sciquel" />
      </form>
      
      <Link href="/">
        <a>Login</a>
      </Link>
    </nav>
  )
}