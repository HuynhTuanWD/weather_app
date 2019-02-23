"use strict"
import {combineReducers} from 'redux';

// HERE IMPORT REDUCERS TO BE COMBINED
import {booksReducers} from './booksReducers';
import {userReducers} from './userReducers';

//HERE COMBINE THE REDUCERS
export default combineReducers({
  books: booksReducers,
  user: userReducers
})
