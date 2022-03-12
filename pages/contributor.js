<<<<<<< HEAD
import ContributorBar from "../components/ContributorBar/contributorBar";
import ArticleCard from "../components/ArticleCard/ArticleCard";
import ContributorLayout from "../components/ContributorLayout/contributorLayout";
import styles from "../components/ContributorLayout/contributorLayout.module.css"
import BiologyTag from "../components/Tag/BiologyTag";
import React, { useState, useEffect } from "react";
import ContributorPosts from "../components/ContributorPosts/ContributorPosts"

function Contributor(){

=======
import Profile from "../components/ContributorPage/ContributorBar/Profile";
import Cards from "../components/HomePage/Cards/Cards";
import ContributorLayout from "../components/ContributorPage/ContributorLayout/ContributorLayout";
import styles from "../components/ContributorPage/ContributorLayout/ContributorLayout.module.css"
import Link from "next/link";

function Contributor(){
    
>>>>>>> 8123e24752a66d1abfcfab0ac38d76e0713e946f
    const contributorName = 'Edward Chen';
    const spans = ['biology', 'math'];
    const description = 'How the Hawaiian bobtail squid brings a creative vision to its maritime world of small big screens';
    const tags = {
        color: '#D28161',
<<<<<<< HEAD
    };
    const image = "/SciQuel_1.png";
    const icons = {
        fb: "/facebook@512px.png",
        ins: "/instagram@512px.png",
        twitter: "/twitter@512px.png"
    }
    const articleCard = <ArticleCard 
        headline="Lights. Camera. Action!"
        subheadline="How the Hawaiian bobtail squid brings a creative vision to its..."
        contributor="Edward Chen"
        kind="ARTICLE"
        tag={BiologyTag}
        date="05/27/21"
        imgSrc="/bobtail.png"
        href="/posts/post"
    />
    return (
        <ContributorLayout>
            <ContributorBar className={styles.left}
=======
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
>>>>>>> 8123e24752a66d1abfcfab0ac38d76e0713e946f
                image = {image} 
                contributorName={contributorName} 
                spans = {spans} 
                description={description} 
                tags = {tags}
                icons = {icons}
            />
            <div className={styles.right}>
<<<<<<< HEAD
                <ContributorPosts postsPerPage={12}/>
=======
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
>>>>>>> 8123e24752a66d1abfcfab0ac38d76e0713e946f
            </div>
        </ContributorLayout>
    )
}

export default Contributor