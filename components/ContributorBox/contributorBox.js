import { Card, Container, Row, Col } from "react-bootstrap";
import styles from "./contributorBox.module.css";

function ContributorBox({ contributorName, desc, image }) {
  return (
    <Container>
      <Card className={styles.contributorBox} style={{ height: "20rem" }}>
        <Row>
          <Col sm={5}>
            <Card.Img
              className={styles.contributorImg}
              variant="left"
              src={image}
            />
          </Col>
          <Col sm={7}>
            <Card.Body className={styles.contributorText}>
              <Card.Text className={styles.contributorHeader}>
                <h1> {contributorName} </h1>
              </Card.Text>
              <Card.Text className={styles.contributorBody}>{desc}</Card.Text>
            </Card.Body>
          </Col>
        </Row>
      </Card>
    </Container>
  );
}

export default ContributorBox;
