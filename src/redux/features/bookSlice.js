import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const loadBookAsync = createAsyncThunk('books/loadBookAsync', async () => {
  const response = await axios.get('https://api.npoint.io/bd2fcd183fe0ad7148c4');
  return response.data;
});

const bookSlice = createSlice({
  name: 'books',
  initialState: {
    discoverList: [],
    readingList: [],
    finishedList: [],
    status: 'idle',
    error: '',
  },
  reducers: {
    addToReadingList: (state, action) => {
      state.readingList.push(action.payload);
    },
    removeFromReadingList: (state, { payload }) => {
      state.readingList = state.readingList.filter((book) => book.id !== payload);
    },
    addToFinishedList: (state, { payload }) => {
      state.readingList = state.readingList.filter((book) => book.id !== payload.id);
      state.finishedList.push(payload);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loadBookAsync.pending, (state, action) => {
      state.status = 'Pending';
    });
    builder.addCase(loadBookAsync.fulfilled, (state, { payload }) => {
      state.discoverList = payload;
      state.status = 'Success';
    });
    builder.addCase(loadBookAsync.rejected, (state, { error: { message } }) => {
      state.status = 'Rejected';
      state.error = message;
    });
  },
});

export const { addToReadingList, removeFromReadingList, addToFinishedList } = bookSlice.actions;

export default bookSlice.reducer;
