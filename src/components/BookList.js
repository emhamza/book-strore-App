import { React, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Book from './Book';
import { getBook } from '../redux/books/booksSlice';

function BookList() {
  const { books, isLoading, error } = useSelector((state) => state.books);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBook());
  }, []);

  if (!Array.isArray(books)) {
    return null;
  }

  if (isLoading) {
    return <p>Books are loading ...</p>;
  }
  if (error) {
    return <p>Error message</p>;
  }
  return (
    <div>
      {books.map((book) => (
        <Book key={book.item_id} book={book} />
      ))}
    </div>
  );
}
export default BookList;
