import Link from "next/link";
import Layout from "../components/layout";
import MainCard from "../components/MainCard/MainCard";
import Cards from "../components/Cards/Cards";
import styles from "../components/layout.module.css";

export default function Home() {
    const title = "Lights. Camera. Action!";
    const contributorCard = "Edward Chen";
    const content = "Some quick example text to build on the card title and make up the bulk of the card's content."
    const kind = "ARTICLE";
    const tagCard = {
      color: '#D28161',
      size: '10px',
      contentTag: 'biology'
    };
    const imageCard = '/bobtail.png'
    const day = {
        date: 17,
        month: 1,
        year: 2022
    }
    return (
        <Layout>
            <h1>Read what&apos;s new</h1>
            <MainCard
                tag="chemistry"
                headline="Lights. Camera. Action!"
                subheadline="How the Hawaiian bobtail squid brings a creative vision to its maritime world of small big screens"
                contributor="By Edward Chen"
                date="05/27/21"
                imgSrc="/hawaiian_bobtail_squid.png"
                href="/posts/post"
            />
            <div className={styles.cards}>
                <Link href="/posts/post">
                    <a><Cards
                      title = {title}
                      content = {content}
                      contributorCard = {contributorCard}
                      kind = {kind}
                      day = {day}
                      imageCard = {imageCard}
                      tagCard = {tagCard}/>
                    </a>
                </Link>
                <Link href="/posts/post">
                    <a><Cards
                      title = {title}
                      content = {content}
                      contributorCard = {contributorCard}
                      kind = {kind}
                      day = {day}
                      imageCard = {imageCard}
                      tagCard = {tagCard}/>
                    </a>
                </Link>
                <Link href="/posts/post">
                    <a><Cards
                      title = {title}
                      content = {content}
                      contributorCard = {contributorCard}
                      kind = {kind}
                      day = {day}
                      imageCard = {imageCard}
                      tagCard = {tagCard}/>
                    </a>
                </Link>
            </div>
        </Layout>
    )
  }
