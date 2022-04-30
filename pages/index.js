import HomepageLayout from "../components/HomepageLayout/HomepageLayout";
import MainCard from "../components/MainCard/MainCard";
import ArticleCard from "../components/ArticleCard/ArticleCard";
import BiologyTag from "../components/Tag/BiologyTag";

import StaffPick from "../components/StaffPick/StaffPick";

export default function index() {
  const mainCard = (
    <MainCard
      headline="Lights. Camera. Action!"
      subheadline="How the Hawaiian bobtail squid brings a creative vision to its maritime world of small big screens"
      contributor="By Edward Chen"
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

  const staffPickCard = (
    <StaffPick
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
      <div className="d-flex row justify-content-center">
        <div
          style={{
            paddingLeft: "2rem",
            paddingRight: "2rem",
          }}
        >
          {mainCard}
        </div>

        <div
          className="d-flex justify-content-center row row-cols-md-1  row-cols-md-2 row-cols-lg-3"
          style={{
            width: "1790px",
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

      <div className="d-flex flex-column justify-content-center p-5">
        <div style={{ fontSize: "40px" }}>Staff Picks</div>
        {staffPickCard}
        {staffPickCard}
        {staffPickCard}
      </div>
    </HomepageLayout>
  );
}
