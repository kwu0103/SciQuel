import Link from "next/Link";
import { Card } from 'react-bootstrap';

import Tag from "../Tag/Tag";

import cardStyles from "./ArticleCard.module.css";
import utilStyles from "../../styles/utils.module.css";
import Image from 'next/image';

function ArticleCard({
    headline,
    subheadline,
    contributor,
    kind,
    tag,
    imgSrc,
    layout,
    date,
    href
}) {

    return (
        <Link href={href} passHref>
            {/* <div className={"text-center", cardStyles.cardBackground + ' ' + utilStyles.grow}> */}
            <div className={cardStyles.cardBackground + ' ' + utilStyles.grow}>
                <Card >
                    <Card.Body>
                        {tag}
                        <small className={cardStyles.kind + ' ' + cardStyles.bodyFont}>{kind}</small>
                        <div className={cardStyles.center}>
                            <Card.Title className={cardStyles.headline}>{headline}</Card.Title>
                            <Card.Text className={cardStyles.body + ' ' + cardStyles.bodyFont}>
                                {subheadline}
                            </Card.Text>
                            <Card.Text>
                                <small className={cardStyles.small + ' ' + cardStyles.bodyFont}>By {contributor}</small>
                                <small className={cardStyles.dateOnCard + ' ' + cardStyles.bodyFont}>{date}</small>
                            </Card.Text>
                        </div>
                    </Card.Body>

                    <Card.Img className={cardStyles.cardPic} variant="bottom" src={imgSrc} />
                </Card>
            </div>
        </Link >
    )
}

export default ArticleCard;
