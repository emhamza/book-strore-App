import React from 'react';
import './styles/Book.css';
import PropTypes from 'prop-types';

function Book({ book }) {
  return (
    <div key={book.item_id} className="all-books">
      <div>
        <p>Book</p>
        <h2>{book.title}</h2>
        <p>{book.author}</p>
        <p>
          <button type="submit">Edit</button>
          |
          <button type="submit">Remove</button>
          |
          <button type="submit">comment</button>
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
