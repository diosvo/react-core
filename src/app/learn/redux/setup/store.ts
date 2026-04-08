import { configureStore } from '@reduxjs/toolkit';
import bugsReducer from './reducer';

const store = configureStore({
  reducer: {
    bugs: bugsReducer,
  },
});

export default store;
