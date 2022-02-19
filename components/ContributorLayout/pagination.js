import React from 'react';
import styles from './contributorLayout.module.css'
import Link from 'next/link';

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className='pagination'>
        {pageNumbers.map(number => (
          <Link key={number} className='page-item' href=''>
            <a onClick={() => paginate(number)} className='page-link'>
              {number}
            </a>
          </Link>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
