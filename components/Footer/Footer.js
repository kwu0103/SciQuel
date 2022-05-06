import Link from "next/Link";
import styles from "./Footer.module.css";
import Image from "next/Image";

export default function Footer() {
  const onSubscribe = (e) => {
    e.preventDefault();
    console.log("Subscribed");
    document.getElementById("email").value = "";
  };

  return (
    <div className={styles.container}>
      <div className={styles.flex}>
        <div>
          <h6 className={styles.text}>
            Get a weekly dose of accessible science to your inbox
          </h6>
          <form onSubmit={onSubscribe}>
            <input
              id="email"
              type="email"
              className={styles.input}
              placeholder="sciquel@gmail.com"
              pattern="^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
              title="Please provide a valid email"
              required
            />
            <button type="submit" className={styles.button}>
              Subscribe
            </button>
          </form>
        </div>
        <div className={styles.right}>
          <h6 className={styles.logo}>SciQuel</h6>
          <div className={styles.social}>
            <Link href="/">
              <a>
                <div className={styles.icon}>
                  <Image
                    src="/instagram.svg"
                    width={20}
                    height={20}
                    alt="instagram"
                  />
                </div>
              </a>
            </Link>
            <Link href="/">
              <a>
                <div className={styles.icon}>
                  <Image
                    src="/facebook.svg"
                    width={20}
                    height={20}
                    alt="facebook"
                  />
                </div>
              </a>
            </Link>
            <Link href="/">
              <a>
                <div className={styles.icon}>
                  <Image
                    src="/youtube.svg"
                    width={20}
                    height={20}
                    alt="youtube"
                  />
                </div>
              </a>
            </Link>
            <Link href="/">
              <a>
                <div className={styles.icon}>
                  <Image src="/share.svg" width={20} height={20} alt="share" />
                </div>
              </a>
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
  );
}
