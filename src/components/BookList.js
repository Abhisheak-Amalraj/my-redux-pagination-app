import React from 'react';

const BookList = ({ books }) => {
  return (
    <div>
      <ul>
        {books.map((book) => (
          <li key={book.id}>{book.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default BookList;
