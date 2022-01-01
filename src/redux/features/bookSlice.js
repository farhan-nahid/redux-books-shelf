import { createSlice } from '@reduxjs/toolkit';

const bookSlice = createSlice({
  name: 'books',
  initialState: {
    discoverList: [],
    readingList: [],
    finishedList: [],
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
});

export const { addToReadingList, removeFromReadingList, addToFinishedList } = bookSlice.actions;

export default bookSlice.reducer;
