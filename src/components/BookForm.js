import React, { useState } from 'react';
import './styles/BookForm.css';
import { nanoid } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { Button } from 'reactstrap';
import { addBook, postBook } from '../redux/books/booksSlice';

function BookForm() {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [error, setError] = useState('');

  const dispatch = useDispatch();

  const handleAdd = () => {
    // Check if title and author are not empty
    if (title.trim() !== '' && author.trim() !== '') {
      dispatch(
        postBook({
          item_id: nanoid(),
          title,
          author,
          category: 'unknown', // typo fixed
        }),
      );
      dispatch(
        addBook({
          item_id: nanoid(),
          title,
          author,
          category: 'unknown', // typo fixed
        }),
      );
      setError('');
      setTitle('');
      setAuthor('');
    } else {
      setError('Book title and Author are required');
    }
  };

  return (
    <>
      <section className="form-sect">
        <div className="SECT-DIVIDER">
          <div className="footer-divider" />
        </div>
        <h2 className="form-title">ADD NEW BOOK</h2>
        <form className="FORM">
          <label htmlFor="title-input">
            <input
              className="book-title"
              placeholder="Book Title"
              type="text"
              id="title-input"
              value={title}
              onChange={(event) => setTitle(event.target.value)}
            />
          </label>
          <label htmlFor="author-input">
            <input
              className="book-author"
              placeholder="Author"
              type="text"
              id="author-input"
              value={author}
              onChange={(event) => setAuthor(event.target.value)}
            />
          </label>
          <Button
            className="form-btn"
            type="button"
            onClick={() => {
              handleAdd();
            }}
          >
            ADD BOOK
          </Button>
          <span>{error}</span>
        </form>
      </section>

    </>
  );
}

export default BookForm;
