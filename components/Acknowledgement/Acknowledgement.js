import styles from "./Acknowledgement.module.css";

function Acknowledgement({children}){
    return <div>
            <hr className={styles.hr} />
            <div className={styles.content}>
                {children}
            </div>
        </div>;
}

export default Acknowledgement;
