import books from '../../fakeData/books.json';
import { ADD_TO_READING_LIST, REMOVE_FROM_READING_LIST } from '../types/BookTypes';

const initialState = {
  discoverList: books,
  readingList: [],
  finishedList: [],
};

export const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_READING_LIST: {
      const newState = {
        ...state,
        readingList: [...state.readingList, action.payload],
      };
      return newState;
    }
    case REMOVE_FROM_READING_LIST:
      const newState = {
        ...state,
        readingList: state.readingList.filter((book) => book.id !== action.payload),
      };
      return newState;
    default:
      return state;
  }
};
