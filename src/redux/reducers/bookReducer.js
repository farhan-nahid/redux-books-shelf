import books from '../../fakeData/books.json';
import { ADD_TO_FINISH_LIST, ADD_TO_READING_LIST, REMOVE_FROM_READING_LIST } from '../types/BookTypes';

const initialState = {
  discoverList: books,
  readingList: [],
  finishedList: [],
};

export const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    // update Reading List State

    case ADD_TO_READING_LIST:
      const updateReadingListState = {
        ...state,
        readingList: [...state.readingList, action.payload],
      };
      return updateReadingListState;

    // update Reading List State After Remove

    case REMOVE_FROM_READING_LIST:
      const updateReadingListStateAfterRemove = {
        ...state,
        readingList: state.readingList.filter((book) => book.id !== action.payload),
      };
      return updateReadingListStateAfterRemove;

    //update Finished List State

    case ADD_TO_FINISH_LIST:
      const updateFinishedListState = {
        ...state,
        readingList: state.readingList.filter((book) => book.id !== action.payload.id),
        finishedList: [...state.finishedList, action.payload],
      };
      return updateFinishedListState;
    default:
      return state;
  }
};
