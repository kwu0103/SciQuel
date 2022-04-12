import ContributorBar from "../components/ContributorBar/contributorBar";
import ArticleCard from "../components/ArticleCard/ArticleCard";
import ContributorLayout from "../components/ContributorLayout/contributorLayout";
import styles from "../components/ContributorLayout/contributorLayout.module.css";
import ChemistryTag from "../components/Tag/ChemistryTag";
import BiologyTag from "../components/Tag/BiologyTag";
import ContributorPosts from "../components/ContributorPosts/ContributorPosts";

function Contributor() {
  const contributorName = "Edward Chen";
  const description =
    "How the Hawaiian bobtail squid brings a creative vision to its maritime world of small big screens";
  const tags = [BiologyTag, ChemistryTag];
  const image = "/SciQuel_1.png";
  const icons = {
    facebook: ["/facebook@512px.png", "https://facebook.com"],
    instagram: ["/instagram@512px.png", "https://instagram.com"],
    twitter: ["/twitter@512px.png", "https://twitter.com"],
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
