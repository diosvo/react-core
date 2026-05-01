import type { PayloadAction } from '@reduxjs/toolkit';
import { createSelector, createSlice, nanoid } from '@reduxjs/toolkit';

import { differenceInMinutes } from 'date-fns';

import { apiRequestBegan } from './api';
import { AppDispatch, RootState } from './store';

interface User {
  id: string;
  name: string;
}

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
    addUser: {
      reducer: (state, action: PayloadAction<User>) => {
        state.list.push(action.payload);
      },
      prepare: (name: string) => {
        const id = nanoid();
        return { payload: { id, name } };
      },
    },
  },
});

export const { addUser, requested, requestFailed, received } =
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

// 💿 Caching - () => fn(dispatch, getState) - Thunk
export const loadUsers =
  () => (dispatch: AppDispatch, getState: () => RootState) => {
    const { lastFetch } = getState().entities.users;

    const diffInMinutes = differenceInMinutes(Date.now(), lastFetch as number);
    if (diffInMinutes < 10) return;

    dispatch(_loadUsers());
  };

// 🚀 Save data to the server
export const postUser = (name: string) => (dispatch: AppDispatch) => {
  dispatch(
    apiRequestBegan({
      url,
      method: 'POST',
      data: { name },
      onSuccess: addUser.type, // ✅
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
