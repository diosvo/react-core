import { combineReducers } from '@reduxjs/toolkit';
import bugsReducer from '../setup/reducer';
import couterReducer from '../setup/slices';
import usersReducer from '../setup/users';

export default combineReducers({
  bugs: bugsReducer,
  counter: couterReducer,
  users: usersReducer,
});
