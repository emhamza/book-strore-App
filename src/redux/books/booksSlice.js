import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  books: [],
};

const booksSlice = createSlice({
  name: 'book',
  initialState,
  reducers: {
    addBook: (state, action) => {
      state.books.push({
        itemId: action.itemId,
        title: action.title,
        author: action.author,
        category: action.category,
      });
    },
    deleteBook: (state, action) => {
      state.books = state.books.filter(
        (book) => book.itemId !== action.payload,
      );
    },
  },
});

export const { addBook, deleteBook } = booksSlice.actions;

export default booksSlice.reducer;
