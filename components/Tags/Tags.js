import styles from "./Tags.module.css";

function Tag({size, color, content}){
    const style = {
        backgroundColor: color,
        fontSize: size,
      };

    return (
        <>
            <span 
                className= {styles.tag}
                style = {style} 
            >
                    {content}
            </span>
        </>
    )
}

export default Tag
