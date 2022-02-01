import Image from "next/Image";
import Link from "next/Link";

import styles from "./MainCard.module.css";
import utilStyles from "../../styles/utils.module.css";

function MainCard({
    tag,
    headline,
    subheadline,
    author,
    date,
    imgSrc,
    href
}){
    const {color, tagName} = tag;

    return(
        <div className={styles.MainCard}>
            <Link href={href} passHref={true}>
                <div>
                    <div className={styles.HeadlineBox+' '+utilStyles.grow}>
                        {tag}
                        <div className={styles.HeadlineText}>{headline}</div>
                        <div className={styles.SubheadlineText}>{subheadline}</div>
                    </div>
                    <p className={styles.AuthorText} id="MainCardAuthorText">{author}&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;{date}</p>
                </div>
            </Link>
            <div className={styles.ImageContainer}>
                <Image className={styles.Image} src={imgSrc} alt={imgSrc} width="700px" height="375px" objectFit="cover" objectPosition="-20%" />
            </div>
        </div>
    );
}

export default MainCard;
