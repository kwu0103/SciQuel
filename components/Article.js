import Head from "next/Head";
import { createElement } from "react";

import Date from "./Date";
import Tag from "./Tag/Tag";

import utilStyles from "../styles/utils.module.css";

/**
 *
 * @param {string} title Displayed as main headline on top of background header image
 * @param {string} subtitle Displayed underneat headline on top of background header image
 * @param {Tag} tag should be imported from file like 'BiologyTag'
 * @param {object} contributors displayed as "{key} by {value}"
 * @param {string} date argument for parseISO
 * @param {string} length
 * @param {JSX.Element} children The article body
 */
function Article({
  title,
  subtitle,
  tag,
  contributors,
  date,
  length,
  children,
}) {
  const contributorArray = [];
  for (const [key, val] of Object.entries(contributors))
    contributorArray.push(
      <span>
        {key} by {val}
        <br />
      </span>
    );
  const contributorSection = createElement("div", {}, contributorArray);
  return (
    <>
      <Head>
        <title>SciQuel</title>
      </Head>
      <article>
        <div className={utilStyles.background}>
          <div className={utilStyles.centertitle}>
            <h1 className={utilStyles.heading2Xl}>{title}</h1>
          </div>
          <div className={utilStyles.centersubtitle}>
            <h2 className={utilStyles.headingXl}>{subtitle}</h2>
          </div>
        </div>
        <div className={utilStyles.centerarticle}>
          <b>Article</b> | <b>Essay</b> | {tag}
          <br /> <br />
          <h5>{contributorSection}</h5>
          <h5>
            <Date dateString={date} /> | {length}
          </h5>
          <br />
          {children}
        </div>
      </article>
    </>
  );
}

export default Article;
