import styles from "./Acknowledgement.module.css";

function Acknowledgement({children}){
<<<<<<< HEAD
    return <div>
=======
    return (
        <div>
>>>>>>> 8123e24752a66d1abfcfab0ac38d76e0713e946f
            <hr className={styles.hr} />
            <div className={styles.content}>
                {children}
            </div>
        </div>
    )
}

export default Acknowledgement;
