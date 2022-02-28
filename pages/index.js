import HomepageLayout from "../components/HomepageLayout/HomepageLayout";
import MainCard from "../components/MainCard/MainCard";
import ArticleCard from "../components/ArticleCard/ArticleCard";
import BiologyTag from "../components/Tag/BiologyTag";

import styles from "../components/HomepageLayout/HomepageLayout.module.css";

import Image from "next/image";

import profilePic from '../public/bobtail.png'

export default function index() {

  const mainCard = <MainCard
    headline="Lights. Camera. Action!"
    subheadline="How the Hawaiian bobtail squid brings a creative vision to its maritime world of small big screens"
    contributor="By Edward Chen"
    tag={BiologyTag}
    date="05/27/21"
    imgSrc={profilePic}
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
    layout="responsive"
    href="/posts/post"
  />;

  return (
    <HomepageLayout>
      <h1>Read what&apos;s new</h1>
      <div class="mx-auto w-75"  >
        <div class="row g-0">

          <div class="row g-0 ">
            <div class="col g-0">
              <div className={styles.maincard}>
                {mainCard}
              </div>

            </div>
          </div>

          <div class="row g-0">
            <div class="col g-0">
              {articleCard}
            </div>
            <div class="col g-0">
              {articleCard}
            </div>
            <div class="col g-0">
              {articleCard}
            </div>

          </div>



        </div>
      </div>


    </HomepageLayout >
  );
}
