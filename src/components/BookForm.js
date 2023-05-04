import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './styles/BookForm.css';

function BookForm({ onSubmit }) {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit({ title, author });
    setTitle('');
    setAuthor('');
  };

  return (
    <form onSubmit={handleSubmit}>
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
      <button type="submit">Add Book</button>
    </form>
  );
}

BookForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
export default BookForm;
