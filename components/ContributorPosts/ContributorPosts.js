import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";

import ArticleCard from "../ArticleCard/ArticleCard";
import BiologyTag from "../Tag/BiologyTag";

import styles from "./ContributorPosts.module.css";

/** number of fake posts to generate for sample post list */
const NUM_POSTS = 189;

function Posts({ currentPosts, loading }) {
  // TODO: better loading indicator
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

/** TODO: replace this with actual backend fetch */
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
  const [currentPage, setCurrentPage] = useState(1); // only used to keep track
  const [hidePrevLink, setHidePrevLink] = useState(true);
  const [hideNextLink, setHideNextLink] = useState(false);
  const [pageRange, setPageRange] = useState(5);

  // initial loading of all posts
  useEffect(() => {
    fetchPosts()
      .then((result) => setPosts(result))
      .then(() => setLoading(false));
  }, []);

  // keep page count up to date
  useEffect(() => {
    setPageCount(Math.ceil(posts.length / postsPerPage));
  }, [posts, postsPerPage]);

  // update current posts based on current page
  useEffect(() => {
    const postOffset = (currentPage - 1) * postsPerPage;
    setCurrentPosts(posts.slice(postOffset, postOffset + postsPerPage));
  }, [currentPage, posts, postsPerPage]);

  useEffect(() => {
    // conditionally hide prev/next buttons when redundant
    if (currentPage === 1) setHidePrevLink(true);
    else setHidePrevLink(false);
    if (currentPage === pageCount) setHideNextLink(true);
    else setHideNextLink(false);
  }, [currentPage, pageCount]);

  // conditionally change pageRange for uniform link count
  useEffect(() => {
    switch (currentPage) {
      case 1:
      case pageCount:
        setPageRange(7);
        break;
      case 2:
      case 3:
        setPageRange(6);
        break;
      case pageCount - 1:
      case pageCount - 2:
        setPageRange(7);
        break;
      case 4:
      case pageCount - 3:
        setPageRange(6);
        break;
      default:
        setPageRange(5);
        break;
    }
  }, [currentPage, pageCount]);

  // keep track of current page
  const handlePageClick = (event) => {
    setCurrentPage(event.selected + 1);
  };

  const Pagination = (
    <ReactPaginate
      breakLabel="..."
      breakClassName={styles.breakClass}
      nextLabel="Next >"
      nextClassName={styles.nextClass}
      previousLabel="< Prev."
      previousClassName={styles.prevClass}
      pageLabelBuilder={(page) => {
        if (page === currentPage) return "[" + page + "]";
        return page;
      }}
      pageRangeDisplayed={pageRange}
      marginPagesDisplayed={1}
      onPageChange={handlePageClick}
      pageCount={pageCount}
      renderOnZeroPageCount={null}
      pageClassName={styles.pageItem}
      pageLinkClassName={styles.numLink}
      previousLinkClassName={
        styles.prevLink + " " + (hidePrevLink && styles.hide)
      }
      nextLinkClassName={styles.nextLink + " " + (hideNextLink && styles.hide)}
      breakLinkClassName={styles.breakLink}
      containerClassName={styles.pagination}
    />
  );

  return (
    <>
      <Posts currentPosts={currentPosts} loading={loading} />
      {pageCount > 1 && Pagination}
    </>
  );
}
