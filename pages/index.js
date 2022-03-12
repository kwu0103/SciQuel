<<<<<<< HEAD
import HomepageLayout from "../components/HomepageLayout/HomepageLayout";
import MainCard from "../components/MainCard/MainCard";
import ArticleCard from "../components/ArticleCard/ArticleCard";
import BiologyTag from "../components/Tag/BiologyTag";

import styles from "../components/HomepageLayout/HomepageLayout.module.css";

export default function index() {

  const mainCard = <MainCard 
    headline="Lights. Camera. Action!"
    subheadline="How the Hawaiian bobtail squid brings a creative vision to its maritime world of small big screens"
    contributor="By Edward Chen"
    tag={BiologyTag}
    date="05/27/21"
    imgSrc="/bobtail.png"
    href="/posts/post"
  />;

  const articleCard = <ArticleCard 
    headline="Lights. Camera. Action!"
    subheadline="How the Hawaiian bobtail squid brings a creative vision to its..."
    contributor="Edward Chen"
    kind="ARTICLE"
    tag={BiologyTag}
    date="05/27/21"
    imgSrc="/bobtail.png"
    href="/posts/post"
  />;

  return (
    <HomepageLayout>
      <h1>Read what&apos;s new</h1>
      <div className={styles.maincard}>
        {mainCard}
      </div>
      <div className={styles.cards}>
          {articleCard}
          {articleCard}
          {articleCard}
      </div>
    </HomepageLayout>
  );
}
=======
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
>>>>>>> 8123e24752a66d1abfcfab0ac38d76e0713e946f
