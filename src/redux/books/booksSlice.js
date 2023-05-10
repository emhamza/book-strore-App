import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
// import { addBook } from './booksSlice';

const myURL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/baseRwDWRkSJaKzrLHhR/books';
const initialState = {
  books: [],
  isLoading: Boolean,
  error: undefined,
};

// for taking books from the bookstore api
const getBook = createAsyncThunk('book/get', async () => {
  const books = await axios.get(myURL);
  return books.data;
});

// for posting books to the bookstore api
const postBook = createAsyncThunk('book/post', async (payload) => {
  const post = await axios.post(myURL, payload);
  return post.data;
});

// for posting books to the bookstore api
const delBook = createAsyncThunk('book/delete', async (payload) => {
  const delPost = await axios.delete(`${myURL}/${payload}`);
  return delPost.data;
});

const booksSlice = createSlice({
  name: 'book',
  initialState,
  reducers: {
    addBook: (state, { payload }) => {
      state.books.push({
        item_id: payload.item_id,
        title: payload.title,
        author: payload.author,
        category: payload.category,
      });
    },
    deleteBook: (state, action) => {
      state.books = state.books.filter(
        (book) => book.item_id !== action.payload,
      );
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getBook.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getBook.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.books = Object.entries(payload).flatMap(([key, value]) => value.map((book) => ({
        ...book, item_id: key, progress: 80,
      })));
    });
    builder.addCase(getBook.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });

    // posting extraReducer goes here
    builder.addCase(postBook.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      // Dispatch the addBook action after the book has been added to the server
      state.books.push({
        item_id: payload.item_id,
        title: payload.title,
        author: payload.author,
        category: payload.category,
      });
    });
    builder.addCase(postBook.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });

    // Delete extraReducer goes here
    builder.addCase(delBook.fulfilled, (state) => {
      state.isLoading = false;
    });
    builder.addCase(delBook.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  },
});

export const { addBook, deleteBook } = booksSlice.actions;

export { getBook, postBook, delBook };

export default booksSlice.reducer;
