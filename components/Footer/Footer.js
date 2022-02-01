import Link from "next/link"
import styles from "./footer.module.css"
import Image
 from "next/image"
export default function Footer() {
    return (
        <div className={styles.container}>
            <div className={styles.flex}>
                <div className={styles.emailForm}>
                    <h6 className={styles.text}>Get a weekly dose of accessible science to your inbox</h6>
                    <input className={styles.input} placeholder="sciquel@gmail.com" />
                    <input type="submit" className={styles.button} value="Subscribe"/>
                </div>
                <div>
                    <h6 className={styles.text}>SciQuel</h6>
                    <div className={styles.social}>
                        <Link href="/">
                            <a><div className={styles.icon}><Image src="/instagram.svg" width={20} height={20} alt="instagram"/></div></a>
                        </Link>
                        <Link href="/">
                            <a><div className={styles.icon}><Image src="/facebook.svg" width={20} height={20} alt="facebook"/></div></a>
                        </Link>
                        <Link href="/">
                            <a><div className={styles.icon}><Image src="/youtube.svg" width={20} height={20} alt="youtube"/></div></a>
                        </Link>
                        <Link href="/">
                            <a><div className={styles.icon}><Image src="/share.svg" width={20} height={20} alt="share"/></div></a>
                        </Link>
                    </div>
                </div>
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
