import { combineReducers, configureStore } from '@reduxjs/toolkit';
import entitiesReducer from './entities';

const rootReducer = combineReducers({
  entities: entitiesReducer,
});

const store = configureStore({ reducer: rootReducer });

export default store;
