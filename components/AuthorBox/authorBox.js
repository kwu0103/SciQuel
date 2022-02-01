import {Card, Container, Row, Col} from 'react-bootstrap';
import profileStyles from "./authorbox.module.css";

function AuthorBox({authorName, desc, image}){
    return (
        <>
            <Container>
                <Card className= {profileStyles.authorBox} style={{ height: '20rem' }}>
                    <Row>
                        <Col sm={5}>
                            <Card.Img className= {profileStyles.authorImg} variant="left" src={image} />
                        </Col>
                        <Col sm={7}>
                            <Card.Body className= {profileStyles.authorText}>
                                <Card.Text className= {profileStyles.authorHeader}> 
                                    <h1> {authorName} </h1> 
                                </Card.Text>
                                <Card.Text className= {profileStyles.authorBody}>
                                    {desc}
                                </Card.Text>
                            </Card.Body>
                        </Col>
                    </Row>
                </Card>
            </Container>
        </>
    )
}

export default AuthorBox
