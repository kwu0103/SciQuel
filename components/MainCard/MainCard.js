import styles from "./MainCard.module.css";
import utilStyles from "../../styles/utils.module.css";

import Image from "next/image";
import Link from "next/link";

function MainCard({
    tag,
    headline,
    subheadline,
    contributor,
    date,
    imgSrc,
    href
}){
    return(
        <div className={styles.MainCard}>
            <Link href={href} passHref={true}>
                <div>
                    <div className={styles.HeadlineBox+' '+utilStyles.grow}>
                        <span className={utilStyles.span}>{tag}</span>
                        <h3><b>{headline}</b></h3>
                        <p className={styles.SubheadlineText}>{subheadline}</p>
                    </div>
                    <p className={styles.ContributorText}>{contributor}&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;{date}</p>
                </div>
            </Link>
            <div className={styles.ImageContainer}>
                <Image className={styles.Image} src={imgSrc} alt={imgSrc} width="700px" height="375px" objectFit="cover" objectPosition="-20%" />
            </div>
        </div>
    );
}

export default MainCard;
