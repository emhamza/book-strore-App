import React, { useState } from 'react';
import './styles/BookForm.css';
import { nanoid } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
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
    <form>
      <label htmlFor="title-input">
        Title:
        <input
          type="text"
          id="title-input"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
      </label>
      <label htmlFor="author-input">
        Author:
        <input
          type="text"
          id="author-input"
          value={author}
          onChange={(event) => setAuthor(event.target.value)}
        />
      </label>
      <button
        type="button"
        onClick={() => {
          handleAdd();
        }}
      >
        Add Book
      </button>
      <span>{error}</span>
    </form>
  );
}

export default BookForm;
