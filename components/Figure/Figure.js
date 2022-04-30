import Image from "next/Image";

import styles from "./Figure.module.css";

const CAPTIONPOSITION_OPTIONS = ["left", "right", "below", "above"];
const CAPTIONPOSITION_DEFAULT = "below";

/**
 *
 * @param {string} imgSrc The path of the image displayed
 * @param {string} imgAlt The text displayed when mousing over the image
 * @param {string} captionPosition Determines the position of the caption; one of 'left', 'right', 'below', or 'above'. Defaults to 'below'.
 * @param {JSX.Element} children The caption
 * @returns
 */
function Figure({ imgSrc, imgAlt, captionPosition, children }) {
  if (!CAPTIONPOSITION_OPTIONS.includes(captionPosition)) {
    console.log(
      'invalid Figure captionPosition (%s), expected one of %s; using default captionPosition option "%s"',
      captionPosition,
      JSON.stringify(CAPTIONPOSITION_OPTIONS),
      CAPTIONPOSITION_DEFAULT
    );
    captionPosition = CAPTIONPOSITION_DEFAULT;
  }

  const IMAGE = (
    <div className={styles.image}>
      <Image src={imgSrc} alt={imgAlt} layout="fill" objectFit="contain" />
    </div>
  );

  return (
    <div className={styles.figure + " " + styles[captionPosition]}>
      {IMAGE}
      <div className={styles.caption}> {children} </div>
    </div>
  );
}

export default Figure;
