import HomepageLayout from "../components/HomepageLayout/HomepageLayout";
import MainCard from "../components/MainCard/MainCard";
import ArticleCard from "../components/ArticleCard/ArticleCard";
import BiologyTag from "../components/Tag/BiologyTag";

import styles from "../components/HomepageLayout/HomepageLayout.module.css";

export default function index() {

  const mainCard = <MainCard
    headline="Lights. Camera. Action!"
    subheadline="How the Hawaiian bobtail squid brings a creative vision to its maritime world of small big screens"
    author="By Edward Chen"
    tag={BiologyTag}
    date="05/27/21"
    imgSrc="/bobtail.png"
    href="/posts/post"
  />;

  const articleCard = <ArticleCard 
    headline="Lights. Camera. Action!"
    subheadline="How the Hawaiian bobtail squid brings a creative vision to its..."
    author="Edward Chen"
    kind="ARTICLE"
    tag={BiologyTag}
    date="05/27/21"
    imgSrc="/bobtail.png"
    href="/posts/post"
  />;

  return (
    <HomepageLayout>
      <h1>Read what&apos;s new</h1>
      {mainCard}
      <div className={styles.cards}>
          {articleCard}
          {articleCard}
          {articleCard}
      </div>
    </HomepageLayout>
  );
}
