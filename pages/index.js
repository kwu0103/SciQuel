import Layout from "../components/layout";
import MainCard from "../components/MainCard/MainCard";
import Card from "../components/cards";
import styles from "../components/layout.module.css";
import Link from "next/link";

export default function Home() {
    return (
        <Layout>
            <body>
            <h1>Read what&apos;s new</h1>
            <MainCard
                tag="chemistry"
                headline="Lights. Camera. Action!"
                subheadline="How the Hawaiian bobtail squid brings a creative vision to its maritime world of small big screens"
                author="By Edward Chen"
                date="05/27/21"
                imgSrc="/hawaiian_bobtail_squid.png"
                href="/posts/post"
            />
            <div className={styles.cards}>
                <Link href="/posts/post">
                    <a><Card imgSrc="/cell.jpg"/></a>
                </Link>
                <Link href="/posts/post">
                    <a><Card imgSrc="/cell.jpg"/></a>
                </Link>
                <Link href="/posts/post">
                    <a><Card imgSrc="/cell.jpg"/></a>
                </Link>
            </div>
            </body>
        </Layout>
    )
  }
