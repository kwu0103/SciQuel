import defStyles from "./defBox.module.css";
import DefBox from "../../components/DefinitionBox/defBox";

import { useEffect, useRef } from "react";

function DefWord( {
    word
}){
    // const defBox = useRef();

    // const initialize = () =>{
    //     defBox.current.classList.add(defStyles.hide);
    // }

    // useEffect(()=>{
    //     defWord.current.onmouseover = () => {
    //         defWord.current.classList.add(styles.PseudoGrowHover);
    //     };
    //     defWord.current.onmouseout = () => {
    //         defWord.current.classList.remove(styles.PseudoGrowHover);
    //     // };
    //     {initialize()};
    // }, []);

    const click=() => {
    // if (defBox.current.classList.includes(defStyles.hide)){
    //     defBox.current.classList.remove(defStyles.hide);
    //     defBox.current.classList.add(defStyles.show);
    // }else{
    //     defBox.current.classList.remove(defStyles.show);
    //     defBox.current.classList.add(defStyles.hide);
    // }
        // var box = document.getElementsByClassName("defBox");
    }

    return(

                <button onclick = {click()}className = {defStyles.defText}>{word}</button>
    )
}

export default DefWord;