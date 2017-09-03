import { combineReducers } from 'redux';
import BooksReducer from './reducer_books';
import ActiveBook from './reducer_active_book';

// mapping of our global state
// adding the books key and the value is what ever is returned from BooksReducer (an array of books)
const rootReducer = combineReducers ({
  books: BooksReducer,
  activeBook: ActiveBook
});

export default rootReducer;
