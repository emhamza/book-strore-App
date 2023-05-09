import React from 'react';
import { useSelector } from 'react-redux';
import Book from './Book';

function BookList() {
  const { books } = useSelector((state) => state.books);

  if (!Array.isArray(books)) {
    return null;
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
