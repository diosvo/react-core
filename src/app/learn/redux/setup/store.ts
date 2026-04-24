import { combineReducers, configureStore } from '@reduxjs/toolkit';

import entitiesReducer from './entities';

import api from './middleware/api';
import func from './middleware/func';
import logger from './middleware/logger';
import toast from './middleware/toast';

const rootReducer = combineReducers({
  entities: entitiesReducer,
});

const store = configureStore({
  reducer: rootReducer,
  // Must list all the middleware in the array
  // middleware: () => getDefaultMiddleware new Tuple(logger, func),
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(logger, func, toast, api),
});

export default store;

// Get the type of our store variable
export type AppStore = typeof store;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
