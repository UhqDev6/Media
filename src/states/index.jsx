import { configureStore } from '@reduxjs/toolkit';
import newsReducer from './news/reducer';

const store = configureStore({
  reducer: {
    news: newsReducer,
  },
});

export default store;
