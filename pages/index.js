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
      {/* class="mx-auto w-75"*/}
      <div>
        <div class="d-flex justify-content-center">
          <div style={{ width: '1490px', paddingLeft: '3rem', paddingRight: '3rem' }}>
            <div >
              {mainCard}
            </div>
          </div>
        </div>

        <div class="d-flex justify-content-center">
          <div class="row row-cols-md-1  row-cols-md-2 row-cols-lg-3" style={{ width: '1590px', paddingLeft: '1rem', paddingRight: '1rem' }}>
            <div style={{ padding: "0px" }}>{articleCard}</div>
            <div style={{ padding: "0px" }}>{articleCard}</div>
            <div style={{ padding: "0px" }}>{articleCard}</div>
            <div style={{ padding: "0px" }}>{articleCard}</div>
            <div style={{ padding: "0px" }}>{articleCard}</div>
            <div style={{ padding: "0px" }}>{articleCard}</div>
          </div>
        </div>
      </div>


    </HomepageLayout >
  );
}
