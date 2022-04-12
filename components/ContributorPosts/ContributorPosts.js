import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";

import ArticleCard from "../ArticleCard/ArticleCard";
import BiologyTag from "../Tag/BiologyTag";

import styles from "./ContributorPosts.module.css";

/** number of fake posts to generate for sample post list */
const NUM_POSTS = 176;

function Posts({ currentPosts, loading }) {
  if (loading) {
    return <h2>Loading...</h2>;
  }
  return (
    <>
      {currentPosts.length > 0 && (
        <div className={styles.cardRow}>
          {currentPosts.slice(0, 3).map((post, key) => (
            <div key={key}>{post}</div>
          ))}
        </div>
      )}
      {currentPosts.length > 3 && (
        <div className={styles.cardRow}>
          {currentPosts.slice(3, 6).map((post, key) => (
            <div key={key}>{post}</div>
          ))}
        </div>
      )}
      {currentPosts.length > 6 && (
        <div className={styles.cardRow}>
          {currentPosts.slice(6, 9).map((post, key) => (
            <div key={key}>{post}</div>
          ))}
        </div>
      )}
      {currentPosts.length > 9 && (
        <div className={styles.cardRow}>
          {currentPosts.slice(9, 12).map((post, key) => (
            <div key={key}>{post}</div>
          ))}
        </div>
      )}
    </>
  );
}

/** replace this with actual backend fetch */
async function fetchPosts() {
  const articleCard = (
    <ArticleCard
      headline="Lights. Camera. Action!"
      subheadline="How the Hawaiian bobtail squid brings a creative vision to its..."
      contributor="Edward Chen"
      kind="ARTICLE"
      tag={BiologyTag}
      date="05/27/21"
      imgSrc="/bobtail.png"
      href="/posts/post"
    />
  );
  const _ = [];
  for (let i = 0; i < NUM_POSTS; ++i) _.push(articleCard);
  // sleep for 1 second to allow loading screen to show
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return _;
}

export default function ContributorPosts({ postsPerPage }) {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPosts, setCurrentPosts] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  const [postOffset, setPostOffset] = useState(0);
  const [currentPage, setCurrentPage] = useState(1); // only used to keep track

  // initial loading of all posts
  useEffect(() => {
    fetchPosts()
      .then((result) => setPosts(result))
      .then(() => setLoading(false));
  }, []);

  useEffect(() => {
    const updateCurrentPosts = () => {
      const endOffset = postOffset + postsPerPage;
      console.log(`Loading items from ${postOffset} to ${endOffset}`);
      setCurrentPosts(posts.slice(postOffset, endOffset));
      setPageCount(Math.ceil(posts.length / postsPerPage));
    };
    updateCurrentPosts();
  }, [posts, postOffset, postsPerPage]);

  const handlePageClick = (event) => {
    setCurrentPage(event.selected + 1);
    const newOffset = (event.selected * postsPerPage) % posts.length;
    setPostOffset(newOffset);
  };

  return (
    <>
      <Posts currentPosts={currentPosts} loading={loading} />
      <ReactPaginate
        breakLabel="..."
        nextLabel="Next >"
        previousLabel="< Prev."
        pageLabelBuilder={(page) => {
          if (page === currentPage) return "[" + page + "]";
          return page;
        }}
        pageRangeDisplayed={1}
        marginPagesDisplayed={1}
        onPageChange={handlePageClick}
        pageCount={pageCount}
        renderOnZeroPageCount={null}
        pageClassName="page-item"
        pageLinkClassName={styles.numLink}
        previousClassName="page-item"
        previousLinkClassName={styles.prevLink}
        nextClassName="page-item"
        nextLinkClassName={styles.nextLink}
        breakClassName="page-item"
        breakLinkClassName={styles.breakLink}
        containerClassName={styles.pagination}
      />
    </>
  );
}
