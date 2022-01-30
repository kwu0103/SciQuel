import { Card } from 'react-bootstrap';
import styles from "./cards.module.css";

function Cards({imgSrc}){
    const today = new Date();
    return (
        <div className={styles.cardBackground}>
            <Card style={{ width: '18rem' }}>
                <Card.Header className= {styles.cardHeader}>
                    <span className={styles.spanCard}>biology</span>
                    <small className={styles.authorName}> Edward Chen </small>
                </Card.Header>
                <Card.Body>
                    <Card.Title>Light. Camera. Action!</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card&apos;s content.
                    </Card.Text>
                    <Card.Text>
                        <small>By Edward Chen</small>
                        <small className= {styles.dateOnCard}>{today.getMonth()+1}/{today.getDate()}/{today.getFullYear()}</small>
                    </Card.Text>
                </Card.Body>
                <Card.Img className={styles.cardPic} variant="bottom" src={imgSrc}/>
            </Card>
        </div>
    )
}

export default Cards 
