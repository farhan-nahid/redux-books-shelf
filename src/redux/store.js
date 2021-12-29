import { combineReducers, createStore } from 'redux';
import { bookReducer } from './reducers/bookReducer';
import { composeWithDevTools } from 'redux-devtools-extension';

const allState = combineReducers({
  books: bookReducer,
});

export const store = createStore(allState, composeWithDevTools());
