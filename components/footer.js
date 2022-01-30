import Link from "next/link"
import styles from "./footer.module.css"
import Script from "next/script"

export default function Footer() {
    return (
        <div className={styles.container}>
            <div className={styles.emailForm}>
                <h6 className={styles.text}>Get a weekly dose of accessible science to your inbox</h6>
                <input className={styles.input} placeholder="sciquel@gmail.com" />
                <input type="submit" className={styles.button} value="Subscribe"/>
            </div>

            <nav className={styles.nav}>
                <Link href="/">
                    <a>About</a>
                </Link>

                <Link href="/">
                    <a>Team</a>
                </Link>

                <Link href="/">
                    <a>Terms & Conditions</a>
                </Link>

                <Link href="/">
                    <a>Privacy Policy</a>
                </Link>

                <Link href="/">
                    <a>Contact Us</a>
                </Link>
            </nav>
        </div>
    )
}