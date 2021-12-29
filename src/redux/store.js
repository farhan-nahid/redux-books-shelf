// export store =

import { combineReducers, createStore } from 'redux';
import { bookReducer } from './reducers/bookReducer';

const allState = combineReducers({
  books: bookReducer,
});

export const store = createStore(allState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
