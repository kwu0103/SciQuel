import HomepageLayout from "../components/HomepageLayout/HomepageLayout";
import MainCard from "../components/MainCard/MainCard";
import ArticleCard from "../components/ArticleCard/ArticleCard";
import BiologyTag from "../components/Tag/BiologyTag";

export default function index() {
  const mainCard = (
    <MainCard
      headline="Lights. Camera. Action!"
      subheadline="How the Hawaiian bobtail squid brings a creative vision to its maritime world of small big screens"
      contributor="By EdwardEdward Chen"
      tag={BiologyTag}
      date="05/27/21"
      imgSrc="/bobtail.png"
      href="/posts/post"
    />
  );

  const articleCard = (
    <ArticleCard
      headline="Lights. Camera. Action!"
      subheadline="Countries that once led the world in coronavirus monitoring are now scaling back, leaving the world less prepared to spot variants, experts said."
      contributor="Edward Chen"
      kind="ARTICLE"
      tag={BiologyTag}
      date="05/27/21"
      imgSrc="/bobtail.png"
      layout="responsive"
      href="/posts/post"
    />
  );

  return (
    <HomepageLayout>
      <div style={{ fontSize: "40px", marginLeft: "2rem", padding: "2rem" }}>
        Read what&apos;s new
      </div>
      <div>
        {mainCard}

        <div
          className="d-flex justify-content-center row row-cols-md-1  row-cols-md-2 row-cols-lg-3"
          style={{
            paddingLeft: "1rem",
            paddingRight: "1rem",
          }}
        >
          <div style={{ padding: "0px" }}>{articleCard}</div>
          <div style={{ padding: "0px" }}>{articleCard}</div>
          <div style={{ padding: "0px" }}>{articleCard}</div>
          <div style={{ padding: "0px" }}>{articleCard}</div>
          <div style={{ padding: "0px" }}>{articleCard}</div>
          <div style={{ padding: "0px" }}>{articleCard}</div>
        </div>
      </div>
    </HomepageLayout>
  );
}
