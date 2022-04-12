import Head from "next/Head";
import contributorBarStyle from "./contributorBar.module.css";
import Tag from "../Tag/Tag";
// import BiologyTag from "../Tag/BiologyTag";
import Image from "next/image";

function ContributorBar({
  contributorName,
  spans,
  description,
  tags,
  image,
  icons,
}) {
  const { color } = tags;
  const { fb, ins, twitter } = icons;

  return (
    <>
      <Head>
        <title>Profile</title>
      </Head>
      <article>
        <div className={contributorBarStyle.background}>
          <div className={contributorBarStyle.center}>
            <Image
              src={image}
              className={contributorBarStyle.image}
              alt={contributorName}
              width={480}
              height={480}
            />
            <h1 className={contributorBarStyle.contributorName}>
              {contributorName}
            </h1>
            <Tag color={color}> {spans[0]} </Tag>
            &nbsp;&nbsp;&nbsp;
            <Tag color={color}> {spans[1]} </Tag>
            <br></br>
            <br></br>
            <p className={contributorBarStyle.param}>{description}</p>
            <Image
              className={contributorBarStyle.logo}
              src={fb}
              alt="facebook"
              width={32}
              height={32}
            />
            <Image
              className={contributorBarStyle.logo}
              src={ins}
              alt="instagram"
              width={32}
              height={32}
            />
            <Image
              className={contributorBarStyle.logo}
              src={twitter}
              alt="twitter"
              width={32}
              height={32}
            />
          </div>
        </div>
      </article>
    </>
  );
}

export default ContributorBar;
