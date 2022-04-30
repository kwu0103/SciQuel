import Image from "next/Image";
import Link from "next/Link";
import { useLayoutEffect, useRef } from "react";

import styles from "./MainCard.module.css";
import utilStyles from "../../styles/utils.module.css"; // change hover effect here

/**
 *
 * @param {Tag} tag import a pre-made Tag, like `import BiologyTag from "../components/Tag/BiologyTag";`
 * @param {string} headline displayed without any re-formatting
 * @param {string} subheadline displayed without any re-formatting
 * @param {string} contributor displayed without any re-formatting
 * @param {string} date displayed without any re-formatting
 * @param {string} imgSrc relative to '/public/', like `imgSrc="/bobtail.png"`
 * @param {string} href redirect on click, relative to '/' like `href="/posts/post"`
 */
function MainCard({
  tag,
  headline,
  subheadline,
  contributor,
  date,
  imgSrc,
  href,
}) {
  const ContributorText = useRef();
  const HeadlineBox = useRef();
  const Wrapper = useRef(); // screen width and bounding height

  useLayoutEffect(() => {
    // apply scaling to contributor text when headline box is also scaled
    if (HeadlineBox.current && ContributorText.current) {
      HeadlineBox.current.onmouseover = () => {
        ContributorText.current.classList.add(styles.PseudoGrowHover);
      };
      HeadlineBox.current.onmouseout = () => {
        ContributorText.current.classList.remove(styles.PseudoGrowHover);
      };
      const matches = document.querySelectorAll("fit");

      console.log("pog");
      document.querySelectorAll("fit").forEach((el) => {
        console.log(el);
        el.style.setProperty("--length", el.innerText.length);
      });

      // move contributor text to beneath headline box
      if (Wrapper.current) {
        const height =
          Wrapper.current.offsetHeight / 2 +
          HeadlineBox.current.offsetHeight / 2;
        ContributorText.current.style.top = height + "px"; // override this for media queries
      }
    }
  }, []);

  return (
    <div className={styles.wrapper} ref={Wrapper}>
      <div className={styles.MainCard}>
        <Link href={href} passHref={true}>
          <div className={styles.HeadlineBoxAndContributorText}>
            <div className={styles.VerticalCenter}>
              <div
                className={styles.HeadlineBox + " " + utilStyles.grow}
                ref={HeadlineBox}
              >
                {tag}
                {/* both displayed without any re-formatting */}
                <div className={styles.HeadlineText}>{headline}</div>
                <div className={styles.SubheadlineText}>{subheadline}</div>
              </div>
            </div>
            <div className={styles.ContributorText} ref={ContributorText}>
              {contributor}&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;{date}
            </div>
          </div>
        </Link>
        <div className={styles.ImageContainer}>
          <Image
            className={styles.Image}
            src={imgSrc}
            alt={imgSrc}
            width="700px"
            height="375px"
            objectFit="cover"
            objectPosition="20%"
          />
        </div>
      </div>
    </div>
  );
}

export default MainCard;
