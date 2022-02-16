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
            <div class="row row-cols-1 row-cols-md-3 g-4">
                <div class="col">
                    <div class="card h-100" style={{
                        backgroundColor: '#f8f8ff',
                        maxWidth: '400px'
                    }}>
                        < div className={cardStyles.cardBackground + ' ' + utilStyles.grow} >
                            < Card.Body >
                                {tag}
                                < small className={cardStyles.kind + ' ' + cardStyles.bodyFont} > {kind}</small>
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
                        </div>
                    </div >
                </div >
                <div class="col">
                    <div class="card h-100" style={{
                        backgroundColor: '#f8f8ff',
                        maxWidth: '400px'
                    }}>
                        < div className={cardStyles.cardBackground + ' ' + utilStyles.grow} >


                            < Card.Body >
                                {tag}
                                < small className={cardStyles.kind + ' ' + cardStyles.bodyFont} > {kind}</small>
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
                        </div>
                    </div >
                </div >
                <div class="col">
                    <div class="card h-100" style={{
                        backgroundColor: '#f8f8ff',
                        maxWidth: '400px'
                    }}>
                        < div className={cardStyles.cardBackground + ' ' + utilStyles.grow} >


                            < Card.Body >
                                {tag}
                                < small className={cardStyles.kind + ' ' + cardStyles.bodyFont} > {kind}</small>
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
                        </div>
                    </div >
                </div >
            </div >

        </Link >
    )
}

export default ArticleCard;
