import ContributorBar from "../components/ContributorBar/contributorBar";
import ArticleCard from "../components/ArticleCard/ArticleCard";
import ContributorLayout from "../components/ContributorLayout/contributorLayout";
import styles from "../components/ContributorLayout/contributorLayout.module.css"
import BiologyTag from "../components/Tag/BiologyTag";
import axios from 'axios';
import Pagination from "../components/ContributorLayout/pagination";
import Posts from "../components/ContributorLayout/posts";
import React, { useState, useEffect } from "react";

function Contributor(){
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(12);
  
    useEffect(() => {
      const fetchPosts = async () => {
        setLoading(true);
        const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
        setPosts(res.data);
        setLoading(false);
    };
  
      fetchPosts();
    }, []);
  
    // Get current posts
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
  
    // Change page
    const paginate = pageNumber => setCurrentPage(pageNumber);

    const contributorName = 'Edward Chen';
    const spans = ['biology', 'math'];
    const description = 'How the Hawaiian bobtail squid brings a creative vision to its maritime world of small big screens';
    const tags = {
        color: '#D28161',
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
                image = {image} 
                contributorName={contributorName} 
                spans = {spans} 
                description={description} 
                tags = {tags}
                icons = {icons}
            />
            <div className={styles.right}>
                {/* <section className={styles.cards}>
                    {articleCard}
                    {articleCard}
                    {articleCard}
                </section>
                <section className={styles.cards}>
                    {articleCard}
                    {articleCard}
                    {articleCard}
                </section> */}
                <Posts posts={currentPosts} loading={loading} />
                <div className={styles.pagination}>
                    {/* <button onClick={() => setCurrentPage(currentPage - 1)}>Prev</button> */}
                    <Pagination
                        postsPerPage={postsPerPage}
                        totalPosts={posts.length}
                        paginate={paginate}
                    />
                    {/* <button onClick={() => setCurrentPage(currentPage + 1)}>Next</button> */}
                </div>
            </div>
        </ContributorLayout>
    )
}

export default Contributor