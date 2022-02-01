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
    
    // ensure that the author text below the headline box scales with the headline box
    if(process.browser){
        const HeadlineBox = document.getElementById('MainCardHeadlineBox');
        const AuthorText = document.getElementById('MainCardAuthorText');

        HeadlineBox.onmouseover = () => {
            AuthorText.classList.add(styles.PseudoGrowHover);
        };
        HeadlineBox.onmouseout = () => {
            AuthorText.classList.remove(styles.PseudoGrowHover);
        };
    }

    return(
        <div className={styles.MainCard}>
            <Link href={href} passHref={true}>
                <div>
                    <div className={styles.HeadlineBox+' '+utilStyles.grow} id="MainCardHeadlineBox">
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
