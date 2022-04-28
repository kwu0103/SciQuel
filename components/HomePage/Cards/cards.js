import Head from "next/head";
import { Card } from "react-bootstrap";
import cardStyles from "./Cards.module.css";
import Tag from "../../Tags/Tags";

function Cards({
  title,
  contributorCard,
  content,
  kind,
  tagCard,
  imageCard,
  day,
}) {
  const { color, size, contentTag } = tagCard;
  const { date, month, year } = day;
  return (
    <>
      <Head>
        <title>Cards</title>
      </Head>
      <div className={cardStyles.cardBackground}>
        <Card style={{ width: "21rem", backgroundColor: "#f8f8ff" }}>
          <Card.Body>
            <Tag content={contentTag} color={color} size={size} />
            <small className={cardStyles.contributorName}> {kind} </small>
            <div className={cardStyles.center}>
              <Card.Title>{title}</Card.Title>
              <Card.Text>{content}</Card.Text>
              <Card.Text>
                <small className={cardStyles.small}>By {contributorCard}</small>
                <small className={cardStyles.dateOnCard}>
                  {date}/{month}/{year - 2000}
                </small>
              </Card.Text>
            </div>
          </Card.Body>
          <Card.Img
            className={cardStyles.cardPic}
            variant="bottom"
            src={imageCard}
          />
        </Card>
      </div>
    </>
  );
}

export default Cards;
