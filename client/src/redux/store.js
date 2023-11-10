import { configureStore } from '@reduxjs/toolkit';
import userReducer from './user/userSlice';
import postsReducer from './posts/postsSlice';

const store = configureStore({
  reducer: {
    missions: missionsReducer,
    rockets: rocketsReducer,
  },
});

export default store;