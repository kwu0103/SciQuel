 import {Card} from 'react-bootstrap';
 import styles from "./DefBox.module.css";

 function DefBox( {
     term,
     definition,
     inContext
 }){
     return (
         <>
            <Card style={{ width: '14em', height: '50em'}} className={styles.defBox}>
                        <Card.Body>
                            <Card.Text>
                                <p className={styles.title}>Term</p>
                                <strong>{term}</strong>
                                <hr style = {{width: '7em'}}/>
                                <p className={styles.title}>Definition</p>
                                {definition}
                                <hr style = {{width: '7em'}}/>
                                <p className={styles.title}>In Context</p>
                                {inContext}
                            </Card.Text>
                        </Card.Body>
            </Card>
         </>
     )
 }

 export default DefBox;