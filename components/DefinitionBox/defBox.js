 import {Card} from 'react-bootstrap';
 import defStyles from "./defBox.module.css";
 import { useEffect, useRef } from "react";


 function DefBox( {
     term,
     definition,
     inContext}){


return(
    <div className={defStyles.defBox}>
        <p className={defStyles.title}>Term</p>
        <strong>{term}</strong>
        <hr style = {{width: '7em'}}/>
                <p className={defStyles.title}>Definition</p>
                {/* <button>hi</button> */}
                {/* <button ref = {cancelBtn} className = {defStyles.cancel} 
                ></button> */}


             {definition}
              <hr style = {{width: '7em'}}/>
                <p className={defStyles.title}>In Context</p>
               {inContext}

    </div>
)
 }

 export default DefBox;
