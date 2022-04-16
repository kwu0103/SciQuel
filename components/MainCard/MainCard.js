import Image from "next/Image";
import Link from "next/Link";
import { useEffect, useRef } from "react";
import { Card, Container } from 'react-bootstrap';
import styles from "./MainCard.module.css";
import utilStyles from "../../styles/utils.module.css";// change hover effect here

function MainCard({
    tag,
    headline,
    subheadline,
    contributor,
    date,
    imgSrc,
    href
}) {

    // ensure that the author text below the headline box scales with the headline box
    const HeadlineBox = useRef();
    const ContributorText = useRef();

    useEffect(() => {
        HeadlineBox.current.onmouseover = () => {
            ContributorText.current.classList.add(styles.PseudoGrowHover);
        };
        HeadlineBox.current.onmouseout = () => {
            ContributorText.current.classList.remove(styles.PseudoGrowHover);
        };
    }, []);


    return (
        <div className={styles.MainCard}>
            <div className={styles.ImageContainer}>
                <Image className={styles.Image} src={imgSrc} alt={imgSrc} width="700px" height="375px" objectFit="cover" objectPosition="20%" />
            </div>
            <Link href={href} passHref={true}>
                <div >
                    <div className={styles.HeadlineBox + ' ' + utilStyles.grow} ref={HeadlineBox} >
                        {tag}
                        <div className={styles.HeadlineText}>{headline}</div>
                        <div className={styles.SubheadlineText}>{subheadline}</div>

                    </div>
                    <div>
                        <p className={styles.ContributorText} ref={ContributorText}>{contributor}&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;{date}</p>
                    </div>
                </div>
            </Link>
        </div>
    );
}

export default MainCard;
