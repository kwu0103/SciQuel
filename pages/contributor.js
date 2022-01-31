import Profile from "../components/ContributorPage/ContributorBar/Profile";
import Cards from "../components/HomePage/Cards/Cards";
import ContributorLayout from "../components/ContributorPage/ContributorLayout/ContributorLayout";
import styles from "../components/ContributorPage/ContributorLayout/ContributorLayout.module.css"
import Link from "next/link";

function Contributor(){
    
    const contributorName = 'Edward Chen';
    const spans = ['biology', 'math'];
    const description = 'How the Hawaiian bobtail squid brings a creative vision to its maritime world of small big screens';
    const tags = {
        color: '#D28161',
        size: '15px'
    };
    const image = "/SciQuel_1.png";
    const icons = {
        fb: "/facebook.png",
        ins: "/instagram-2.png"
    }
    const tagCard = {
        color: '#D28161',
        size: '10px',
        contentTag: 'biology'
    };
    const title = "Lights. Camera. Action!";
    const contributorCard = "Edward Chen";
    const content = "Some quick example text to build on the card title and make up the bulk of the card's content."
    const kind = "ARTICLE";
    const imageCard = '/bobtail.png'
    const day = {
        date: 17,
        month: 1,
        year: 2022
    }
    return (
        <ContributorLayout>
            <Profile className={styles.left}
                image = {image} 
                contributorName={contributorName} 
                spans = {spans} 
                description={description} 
                tags = {tags}
                icons = {icons}
            />
            <div className={styles.right}>
                <section className={styles.cards}>
                    <Link href="/posts/post">
                        <a><Cards
                        title = {title}
                        content = {content}
                        contributorCard = {contributorCard}
                        kind = {kind}
                        day = {day}
                        imageCard = {imageCard}
                        tagCard = {tagCard}/>
                        </a>
                    </Link>
                    <Link href="/posts/post">
                        <a><Cards
                        title = {title}
                        content = {content}
                        contributorCard = {contributorCard}
                        kind = {kind}
                        day = {day}
                        imageCard = {imageCard}
                        tagCard = {tagCard}/>
                        </a>
                    </Link>
                    <Link href="/posts/post">
                        <a><Cards
                        title = {title}
                        content = {content}
                        contributorCard = {contributorCard}
                        kind = {kind}
                        day = {day}
                        imageCard = {imageCard}
                        tagCard = {tagCard}/>
                        </a>
                    </Link>
                </section>
                <section className={styles.cards}>
                    <Link href="/posts/post">
                        <a><Cards
                        title = {title}
                        content = {content}
                        contributorCard = {contributorCard}
                        kind = {kind}
                        day = {day}
                        imageCard = {imageCard}
                        tagCard = {tagCard}/>
                        </a>
                    </Link>
                    <Link href="/posts/post">
                        <a><Cards
                        title = {title}
                        content = {content}
                        contributorCard = {contributorCard}
                        kind = {kind}
                        day = {day}
                        imageCard = {imageCard}
                        tagCard = {tagCard}/>
                        </a>
                    </Link>
                    <Link href="/posts/post">
                        <a><Cards
                        title = {title}
                        content = {content}
                        contributorCard = {contributorCard}
                        kind = {kind}
                        day = {day}
                        imageCard = {imageCard}
                        tagCard = {tagCard}/>
                        </a>
                    </Link>
                </section>
            </div>
        </ContributorLayout>
    )
}

export default Contributor