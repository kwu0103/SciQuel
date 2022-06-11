import Link from "next/Link";
import { Card } from "react-bootstrap";
import utilStyles from "../../styles/utils.module.css";
import cardStyles from "../ArticleCard/ArticleCard.module.css";

function StaffPick({
  headline,
  subheadline,
  contributor,
  kind,
  tag,
  imgSrc,
  date,
  href,
}) {
  return (
    <Link href={href} passHref>
      <div
        style={{ width: "100%", marginBottom: "2rem" }}
        className={utilStyles.grow}
      >
        <Card
          className="d-flex flex-row flex-row-reverse p-2"
          style={{ width: "100%" }}
        >
          <Card.Img
            className=""
            style={{ objectFit: "cover", maxHeight: "", maxWidth: "40%" }}
            src={imgSrc}
          />
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
                style={{marginTop:"1rem"}}
              >
                {subheadline}
              </Card.Text>
              <div style={{ marginTop: "3.5rem" }}>
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
        </Card>
      </div>
    </Link>
  );
}

export default StaffPick;
