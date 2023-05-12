import React from 'react';
import { useDispatch } from 'react-redux';
import './styles/Book.css';
import PropTypes from 'prop-types';
import { Button } from 'reactstrap';
import { deleteBook, delBook } from '../redux/books/booksSlice';

function Book({ book }) {
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteBook(id));
    dispatch(delBook(id));
  };

  return (
    <section className="book-section">
      <div className="all-books">
        <div className="main-book-div">
          <p className="book-cat">Book</p>
          <h2 className="BOOK-TITLE">{book.title}</h2>
          <p className="BOOK-AUTHOR">{book.author}</p>
          <p className="BOOK-BUTTONS">
            <button type="submit" className="BUTTON-1">
              Comment
            </button>
            <span className="vl" />
            <button type="submit" className="BUTTON-1" onClick={() => handleDelete(book.item_id)}>
              Remove
            </button>
            <span className="vl" />
            <button type="submit" className="BUTTON-1">Edit</button>
          </p>
        </div>
        <div className="PRO-CARD">
          <div className="PRO-CONTAINER-CIRCULE">
            <div className="PROGRESS-CIRCULE" />
          </div>
          <div>
            <p className="PER-COM">70%</p>
            <p className="COM">Completed</p>
          </div>
          <div className="DIVIDER" />
          <div className="CHAP-CONTAINER">
            <div>
              <p className="MY-CHAP-LABEL">CURRENT CHAPTER</p>
              <p className="MY-CHAP">Chapter 17</p>
            </div>
            <div>
              <Button className="PRO-BUTTON">
                UPDATE PROGRESS
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>

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
