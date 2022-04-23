import Head from "next/head";
import profileStyles from "./Profile.module.css";
import Tag from "../../Tags/Tags";
import Image from "next/image";

function Profile({ contributorName, spans, description, tags, image, icons }) {
  const { color, size } = tags;
  const { fb, ins } = icons;
  return (
    <>
      <Head>
        <title>{contributorName}</title>
      </Head>
      <article>
        <div className={profileStyles.background}>
          <div className={profileStyles.center}>
            <Image
              className={profileStyles.image}
              width={200}
              height={200}
              src={image}
              alt={image}
            />
            <h1 className={profileStyles.contributorName}>{contributorName}</h1>
            <Tag content={spans[0]} color={color} size={size} />
            <Tag content={spans[1]} color={color} size={size} />
            <br></br>
            <br></br>
            <p className={profileStyles.param}>{description}</p>
            <Image
              className={profileStyles.logo}
              width={20}
              height={20}
              src={fb}
              alt={fb}
            />
            <Image
              className={profileStyles.logo}
              width={20}
              height={20}
              src={ins}
              alt={ins}
            />
          </div>
        </div>
      </article>
    </>
  );
}

export default Profile;
