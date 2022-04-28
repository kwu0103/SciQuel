import Head from "next/head";
import { Card } from "react-bootstrap";
import styles from "./cards.module.css";
import Tag from "../Tags/Tags";

function Cards({ title, authorCard, content, kind, tagCard, imageCard, day }) {
  const { color, size, contentTag } = tagCard;
  const { date, month, year } = day;
  return (
    <>
      <Head>
        <title>Cards</title>
      </Head>
      <div className={styles.cardBackground}>
        <Card style={{ width: "21rem", backgroundColor: "#f8f8ff" }}>
          <Card.Body>
            <Tag content={contentTag} color={color} size={size} />
            <small className={styles.authorName}> {kind} </small>
            <div className={styles.center}>
              <Card.Title>{title}</Card.Title>
              <Card.Text>{content}</Card.Text>
              <Card.Text>
                <small className={styles.small}>By {authorCard}</small>
                <small className={styles.dateOnCard}>
                  {date}/{month}/{year - 2000}
                </small>
              </Card.Text>
            </div>
          </Card.Body>
          <Card.Img
            className={styles.cardPic}
            variant="bottom"
            src={imageCard}
          />
        </Card>
      </div>
    </>
  );
}

export default Cards;
