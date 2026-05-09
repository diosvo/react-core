import type { PayloadAction } from '@reduxjs/toolkit';
import { createSelector, createSlice } from '@reduxjs/toolkit';

import { differenceInMinutes } from 'date-fns';

import { User } from '@/lib/models';
import { apiRequestBegan } from './api';
import { AppDispatch, RootState } from './store';

// ✨ Slice
const userSlice = createSlice({
  name: 'user',
  initialState: {
    list: [] as Array<User>,
    loading: false,
    lastFetch: null as number | null, // timestamp of the last fetch
  },
  reducers: {
    requested: (state) => {
      state.loading = true;
    },
    received: (state, action) => {
      state.list = action.payload;
      state.loading = false;
      state.lastFetch = Date.now();
    },
    requestFailed: (state) => {
      state.loading = false;
    },
    // addUser (command) -> userAdded (event)
    userAdded: {
      reducer: (state, action: PayloadAction<User>) => {
        state.list.push(action.payload);
      },
      prepare: (name: string) => {
        const id = Math.floor(Math.random() * 10000);
        const age = Math.floor(Math.random() * 50) + 20;
        const occupation = 'Unknown';

        return { payload: { id, name, age, occupation } };
      },
    },
  },
});

// Temp break encapsulation to export actions and reducer
export const { userAdded, requested, requestFailed, received } =
  userSlice.actions;
export default userSlice.reducer;

// 💡 UI layer solution - Action creator
const url = '/users';

// POJO - () => {}
export const _loadUsers = () =>
  apiRequestBegan({
    url,
    onStart: requested.type,
    onSuccess: received.type,
    onError: requestFailed.type,
  });

// #region 🤔 Problem of solitary tests
// Change the implementation <> Behavior the same way
// => Test failed
export const _loadUsersWithoutMiddleware =
  () => async (dispatch: AppDispatch) => {
    dispatch(requested());

    try {
      const response = await fetch(
        'https://jsonplaceholder.typicode.com' + url,
      );
      const result = await response.json();
      dispatch(received(result));
    } catch (error) {
      dispatch(requestFailed());
    }
  };
//#endregion

// 💿 Caching - () => fn(dispatch, getState) - Thunk
export const loadUsers =
  () => (dispatch: AppDispatch, getState: () => RootState) => {
    const { lastFetch } = getState().entities.users;

    const diffInMinutes = differenceInMinutes(Date.now(), lastFetch as number);
    if (diffInMinutes < 10) return;

    dispatch(_loadUsers());
  };

// 🚀 Save data to the server
export const addUser = (name: string) => (dispatch: AppDispatch) => {
  dispatch(
    apiRequestBegan({
      url,
      method: 'POST',
      data: { name },
      onSuccess: userAdded.type, // ✅
    }),
  );
};

// Selector + Memoization
export const getUserIdByName = (name: string) =>
  createSelector(
    // input
    (state: RootState) => state.entities.users.list,
    // output: return the result from the cache
    (users) => {
      const user = users.find((user) => user.name === name);
      return user ? user.id : null;
    },
  );
