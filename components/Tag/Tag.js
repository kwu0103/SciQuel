import tagStyles from "./tag.module.css";

function Tag({color, children}){
    const style = {
        backgroundColor: color
    };

    return (
        <span className={tagStyles.tag} style={style}>
            {children}
        </span>
    );
}

export default Tag;
