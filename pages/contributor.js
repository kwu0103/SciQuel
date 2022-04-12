import ContributorBar from "../components/ContributorBar/contributorBar";
import ArticleCard from "../components/ArticleCard/ArticleCard";
import ContributorLayout from "../components/ContributorLayout/contributorLayout";
import styles from "../components/ContributorLayout/contributorLayout.module.css";
import BiologyTag from "../components/Tag/BiologyTag";
import ContributorPosts from "../components/ContributorPosts/ContributorPosts";

function Contributor() {
  const contributorName = "Edward Chen";
  const spans = ["biology", "math"];
  const description =
    "How the Hawaiian bobtail squid brings a creative vision to its maritime world of small big screens";
  const tags = {
    color: "#D28161",
  };
  const image = "/SciQuel_1.png";
  const icons = {
    fb: "/facebook@512px.png",
    ins: "/instagram@512px.png",
    twitter: "/twitter@512px.png",
  };
  const articleCard = (
    <ArticleCard
      headline="Lights. Camera. Action!"
      subheadline="How the Hawaiian bobtail squid brings a creative vision to its..."
      contributor="Edward Chen"
      kind="ARTICLE"
      tag={BiologyTag}
      date="05/27/21"
      imgSrc="/bobtail.png"
      href="/posts/post"
    />
  );
  return (
    <ContributorLayout>
      <ContributorBar
        className={styles.left}
        image={image}
        contributorName={contributorName}
        spans={spans}
        description={description}
        tags={tags}
        icons={icons}
      />
      <div className={styles.right}>
        <ContributorPosts postsPerPage={12} />
      </div>
    </ContributorLayout>
  );
}

export default Contributor;
