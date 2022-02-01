 import {Card} from 'react-bootstrap';
 import defStyles from "./defBox.module.css";

 function DefBox( {
     term,
     definition,
     inContext
 }){
     return (
         <>
            <Card style={{ width: '16em', height: '50em'}} className={defStyles.defBox}>
                        <Card.Body>
                            <Card.Text>
                                <p className={defStyles.title}>Term</p>
                                <strong>{term}</strong>
                                <hr style = {{width: '4em'}}/>
                                <p className={defStyles.title}>Definition</p>
                                {definition}
                                <hr style = {{width: '4em'}}/>
                                <p className={defStyles.title}>In Context</p>
                                {inContext}
                            </Card.Text>
                        </Card.Body>
            </Card>
         </>
     )
 }

 export default DefBox;
