import React from 'react';
import { render } from '@testing-library/react';
import BookList from '../BookList';

test('renders book list correctly', () => {
  const books = [
    { id: 1, title: 'Book 1' },
    { id: 2, title: 'Book 2' },
    { id: 3, title: 'Book 3' },
  ];

  const { getByText } = render(<BookList books={books} />);

  expect(getByText('Book 1')).toBeInTheDocument();
  expect(getByText('Book 2')).toBeInTheDocument();
  expect(getByText('Book 3')).toBeInTheDocument();
});
