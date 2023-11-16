import { configureStore } from '@reduxjs/toolkit';
import userReducer from './user/userSlice.js';
import postsReducer from './posts/postsSlice.js';

const store = configureStore({
  reducer: {
    user: userReducer,
    posts: postsReducer,
  },
});

export default store;