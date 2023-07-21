import React from 'react';
import { Link } from 'react-router-dom';

const Pagination = ({ currentPage, totalPages }) => {
  const pageNumbers = [...Array(totalPages).keys()].map((number) => number + 1);

  return (
    <div>
      {pageNumbers.map((pageNumber) => (
        <Link key={pageNumber} to={`/?page=${pageNumber}`}>
          {pageNumber}
        </Link>
      ))}
    </div>
  );
};

export default Pagination;