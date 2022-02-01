import Link from "next/Link";
import {Card} from 'react-bootstrap';

import Tag from "../Tag/Tag";

import cardStyles from "./ArticleCard.module.css";
import utilStyles from "../../styles/utils.module.css";

function ArticleCard({
    headline,
    subheadline,
    author,
    kind,
    tag,
    imgSrc,
    date,
    href
}){

    return (
        <Link href={href} passHref>
            <div className={cardStyles.cardBackground+' '+utilStyles.grow}>
                <Card style={{ width:  "21rem", backgroundColor: '#f8f8ff'}}>
                    <Card.Body>
                        {tag}
                        <small className={cardStyles.kind+' '+cardStyles.bodyFont}>{kind}</small>
                        <div className={cardStyles.center}>
                            <Card.Title className={cardStyles.headline}>{headline}</Card.Title>
                            <Card.Text className={cardStyles.body+' '+cardStyles.bodyFont}>
                                {subheadline}
                            </Card.Text>
                            <Card.Text>
                                <small className={cardStyles.small+' '+cardStyles.bodyFont}>By {author}</small>
                                <small className= {cardStyles.dateOnCard+' '+cardStyles.bodyFont}>{date}</small>
                            </Card.Text>
                        </div>
                    </Card.Body>
                    <Card.Img className={cardStyles.cardPic} variant="bottom" src={imgSrc}/>
                </Card>
            </div>
        </Link>
    )
}

export default ArticleCard; 
