import Link from 'next/Link'
import styles from './header.module.css'

export default function Header() {
  return (
    <nav className={styles.nav}>
      <Link href="/"> 
        <h4>SciQuel</h4>
      </Link>
      
      <div className={styles.list}>
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
        <a>Sign in</a>
      </Link>

      <div className={styles.menu}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </nav>
  )
}
