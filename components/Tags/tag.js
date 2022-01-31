import tagStyles from "./tag.module.css";

function Tag({size, color, content}){
    const style = {
        backgroundColor: color,
        fontSize: size,
      };

    return (
        <>
            <span 
                className= {tagStyles.tag}
                style = {style} 
            >
                    {content}
            </span>
        </>
    )
}

export default Tag
