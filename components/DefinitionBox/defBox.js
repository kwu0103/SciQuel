 import {Card} from 'react-bootstrap';
 import defStyles from "./defBox.module.css";

 function DefBox( {
     term,
     definition,
     inContext
 }){
     return (
         <>
            {/* <div className={defStyles.defBox}>
                             <p className={defStyles.title}>Term</p>
                              <strong>{term}</strong>
                                <hr style = {{width: '4em'}}/>
                                <p className={defStyles.title}>Definition</p>
                                {definition}
                                <hr style = {{width: '4em'}}/>
                                <p className={defStyles.title}>In Context</p>
                                {inContext}

            </div> */}
            <Card    style={{ width: '14em', height: '50em'}} className={defStyles.defBox}>
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
