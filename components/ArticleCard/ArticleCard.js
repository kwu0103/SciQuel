import Link from "next/Link";
import { Card } from "react-bootstrap";
import { useEffect, useRef } from "react";

import cardStyles from "./ArticleCard.module.css";
import utilStyles from "../../styles/utils.module.css";

function ArticleCard({
  headline,
  subheadline,
  contributor,
  kind,
  tag,
  imgSrc,
  date,
  href,
}) {
  // truncate subheadline to three lines
  const subheadlineRef = useRef();
  useEffect(() => {
    const truncate = () => {
      const cur = subheadlineRef.current;
      if (cur) {
        cur.innerText = subheadline; // reset to max length string for resizing up
        while (
          cur.scrollHeight - 2 >= // 2px leeway
          cur.clientHeight
        ) {
          const innerText = cur.innerText;
          const words = innerText.split(" ");
          const lastWordLength = words[words.length - 1].length;
          cur.innerText = // mutating ref's innerText
            innerText.substring(0, innerText.length - lastWordLength - 1) + "…";
        }
      }
    };
    truncate();
    window.addEventListener("resize", truncate);
  }, [subheadline]);

  return (
    <Link href={href} passHref>
      {/* <div className={"text-center", cardStyles.cardBackground + ' ' + utilStyles.grow}> */}
      <div className={cardStyles.cardBackground + " " + utilStyles.grow}>
        <Card style={{ marginRight: "10px", marginLeft: "10px" }}>
          <Card.Body>
            {tag}
            <small className={cardStyles.kind + " " + cardStyles.bodyFont}>
              {kind}
            </small>
            <div className={cardStyles.center}>
              <Card.Title className={cardStyles.headline}>
                {headline}
              </Card.Title>
              <Card.Text
                className={cardStyles.body + " " + cardStyles.bodyFont}
                ref={subheadlineRef}
              >
                {subheadline}
              </Card.Text>
              <div style={{ marginTop: "2.25em" }}>
                <Card.Text>
                  <small
                    className={cardStyles.small + " " + cardStyles.bodyFont}
                  >
                    By {contributor}
                  </small>
                  <small
                    className={
                      cardStyles.dateOnCard + " " + cardStyles.bodyFont
                    }
                  >
                    {date}
                  </small>
                </Card.Text>
              </div>
            </div>
          </Card.Body>

          <Card.Img
            className={cardStyles.cardPic}
            variant="bottom"
            src={imgSrc}
          />
        </Card>
      </div>
    </Link>
  );
}

export default ArticleCard;
