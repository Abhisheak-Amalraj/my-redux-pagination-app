import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { fetchBooksData } from './store/actions';
import BookList from './components/BookList';
import SearchField from './components/SearchField';
import Pagination from './components/Pagination';
import Loading from './components/Loading';

const BooksPage = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const currentPage = parseInt(queryParams.get('page')) || 1;
  const searchQuery = queryParams.get('search') || '';

  const { data, loading, error } = useSelector((state) => state.data);

  useEffect(() => {
    dispatch(fetchBooksData(currentPage, searchQuery));
  }, [dispatch, currentPage, searchQuery]);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1>Book List</h1>
      <SearchField searchValue={searchQuery} handleSearchChange={(e) => console.log(e.target.value)} />
      <BookList books={data} />
      <Pagination currentPage={currentPage} totalPages={10} />
    </div>
  );
};

export default BooksPage;
