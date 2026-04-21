import { combineReducers, configureStore, Tuple } from '@reduxjs/toolkit';
import entitiesReducer from './entities';
import logger from './middleware/logger';

const rootReducer = combineReducers({
  entities: entitiesReducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: () => new Tuple(logger),
});

export default store;

// Get the type of our store variable
export type AppStore = typeof store;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
