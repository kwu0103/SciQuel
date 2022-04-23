import Head from "next/Head";
import Image from "next/Image";

import contributorBarStyle from "./contributorBar.module.css";

function ContributorBar({ contributorName, description, tags, image, icons }) {
  const socials = [];
  for (let [key, value] of Object.entries(icons)) {
    socials.push(
      <a target="_blank" rel="noreferrer" href={value[1]}>
        <Image
          className={contributorBarStyle.logo}
          src={value[0]}
          alt={key}
          width={32}
          height={32}
        />
      </a>
    );
  }
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
            <div className={contributorBarStyle.tags}>
              {tags.map((tag, key) => (
                <span key={key}>{tag}</span>
              ))}
            </div>
            <p className={contributorBarStyle.param}>{description}</p>
            <div className={contributorBarStyle.socials}>
              {socials.map((social, key) => (
                <span key={key}>{social}</span>
              ))}
            </div>
          </div>
        </div>
      </article>
    </>
  );
}

export default ContributorBar;
