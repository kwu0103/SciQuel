import Image from "next/Image";
import Link from "next/Link";
import { useEffect, useRef } from "react";

import { Card } from 'react-bootstrap';
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

        <div className={styles.MainCard} >
            <Link href={href} passHref={true} >
                <div>
                    <div class={styles.HeadlineBox + ' ' + utilStyles.grow} ref={HeadlineBox}>
                        {tag}
                        <div className={styles.HeadlineText}>{headline}</div>
                        <div class="d-md-flex">
                            <div className={styles.SubheadlineText}>{subheadline}</div>
                        </div>
                    </div>
                    <p className={styles.ContributorText} ref={ContributorText}>{contributor}&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;{date}</p>
                </div >
            </Link >
            <div className={styles.ImageContainer}>
                <Image src={imgSrc} />
            </div>
        </div >
    );
}

export default MainCard;
