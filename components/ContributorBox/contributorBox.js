import { Card, Container, Row, Col } from "react-bootstrap";
import styles from "./contributorBox.module.css";

function ContributorBox({ contributorName, desc, image }) {
  return (
    <Container style={{ marginBottom: "20px" }}>
      <Card className={styles.contributorBox}>
        <Row>
          <Col sm={4} style={{ paddingRight: 0 }}>
            <Card.Img
              className={styles.contributorImg}
              variant="left"
              src={image}
            />
          </Col>
          <Col sm={8} style={{ paddingLeft: 0 }}>
            <Card.Body className={styles.contributorText}>
              <Card.Text className={styles.contributorHeader}>
                {/* <h1> {contributorName} </h1> */}
              </Card.Text>
              <Card.Text className={styles.contributorBody}><b style={{ fontWeight: "800" }}>{contributorName}</b>{desc}</Card.Text>
            </Card.Body>
          </Col>
        </Row>
      </Card>
    </Container>
  );
}

export default ContributorBox;
