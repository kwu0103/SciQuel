
import {Card, Container, Row, Col} from 'react-bootstrap';
import profileStyles from "../../styles/profile.module.css";

function authorBox(){
    return (
        <>
            <Container>
                <Card className= {profileStyles.authorBox} style={{ height: '20rem' }}>
                    <Row>
                        <Col sm={5}>
                            <Card.Img className= {profileStyles.authorImg} variant="left" src="/cell.jpg" />
                        </Col>
                        <Col sm={7}>
                            <Card.Body className= {profileStyles.authorText}>
                                <Card.Text className= {profileStyles.authorHeader}> <h1>Author Name </h1></Card.Text>
                                <Card.Text className= {profileStyles.authorBody}>
                                        Some quick example text to build on the card title and make up the bulk
                                        of the card's content. Edward will be on Zoom every Wednesday from 9 pm ET for at least an hour.
                                </Card.Text>
                            </Card.Body>
                        </Col>
                    </Row>
                </Card>
            </Container>
        </>
    )
}

export default authorBox
