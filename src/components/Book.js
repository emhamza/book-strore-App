import React from 'react';
import { useDispatch } from 'react-redux';
import './styles/Book.css';
import PropTypes from 'prop-types';
import { deleteBook } from '../redux/books/booksSlice';

function Book({ book }) {
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteBook(id));
  };

  return (
    <div className="all-books">
      <div>
        <p>Book</p>
        <h2>{book.title}</h2>
        <p>{book.author}</p>
        <p>
          <button type="submit" onClick={() => handleDelete(book.item_id)}>Remove</button>
        </p>
      </div>
      <div>
        <p>completed</p>
      </div>
      <div>
        <p>Crrunt Chapter</p>
        <h3>Chapter 17</h3>
        <button type="submit">Updated Progress</button>
      </div>
    </div>
  );
}

Book.propTypes = {
  book: PropTypes.shape({
    item_id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  }).isRequired,
};

export default Book;
