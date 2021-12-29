import { ADD_TO_READING_LIST, REMOVE_FROM_READING_LIST } from '../types/BookTypes';

export const addToReadingList = (payload) => {
  return {
    type: ADD_TO_READING_LIST,
    payload,
  };
};

export const removeFromReadingList = (payload) => {
  return {
    type: REMOVE_FROM_READING_LIST,
    payload,
  };
};
