import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';

const posts = createReducer([], {
  'posts/fetch': (_, { payload }) => payload,
  'post/add': (store, { payload }) => [...store, payload],
});

export default combineReducers({
  posts,
});
