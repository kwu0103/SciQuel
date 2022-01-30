import Link from 'next/link'
import styles from './header.module.css'

export default function Header() {
  return (
    <nav className={styles.nav}>
      <Link href="/"> 
        <a>SciQuel</a> 
      </Link>

      <Link href="/">
        <a>Latest</a>
      </Link>

      <Link href="/">
        <a>Read</a>
      </Link>

      <Link href="/">
        <a>Listen</a>
      </Link>

      <Link href="/">
        <a>Watch</a>
      </Link>

      <Link href="/">
        <a>Topic</a>
      </Link>

      <Link href="/">
        <a>About</a>
      </Link>

      <input className={styles.input} placeholder="&#x1F50E;Search Sciquel" />
      
      <Link href="/">
        <a>Login</a>
      </Link>
    </nav>
  )
}