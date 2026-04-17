import { combineReducers } from '@reduxjs/toolkit';
import bugsReducer from '../setup/reducer';
import couterReducer from '../setup/slices';

export default combineReducers({
  bugs: bugsReducer,
  counter: couterReducer,
});
