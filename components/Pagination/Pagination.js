import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import axios from 'axios';

function Posts({ currentPosts, loading }) {
  if (loading) {
    return <h2>Loading...</h2>
  }
  return (
    <ul>
      {currentPosts.map(post => (
        <li key={post.id}>
          {post.title}
        </li>
      ))}
    </ul>
  );
};

export default function Pagination({postsPerPage}) {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPosts, setCurrentPosts] = useState(null);
  const [pageCount, setPageCount] = useState(0)
  const [postOffset, setPostOffset] = useState(0)

  useEffect (() => {
    const fetchPosts = async () => {
      setLoading(true);
      const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
      setPosts(res.data);
      setLoading(false);
      const endOffset = postOffset + postsPerPage;
      console.log(`Loading items from ${postOffset} to ${endOffset}`);
      setCurrentPosts(posts.slice(postOffset, endOffset));
      setPageCount(Math.ceil(posts.length / postsPerPage))
    };
    fetchPosts();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handlePageClick = (event) => {
    const newOffset = event.selected * postsPerPage % posts.length;
    setPostOffset(newOffset)
  }

  return (
    <>
        {/* <Posts currentPosts={currentPosts} loading={loading} /> */}
        <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        previousLabel="< previous"
        pageRangeDisplayed={2}
        marginPagesDisplayed={2}
        onPageChange={handlePageClick}
        pageCount={pageCount}renderOnZeroPageCount={null}
        />
    </>
    );
}
