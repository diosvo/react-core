import type { PayloadAction } from '@reduxjs/toolkit';
import { createSelector, createSlice, nanoid } from '@reduxjs/toolkit';

import { RootState } from './store';

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
    add: {
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

export const { add } = userSlice.actions;
export default userSlice.reducer;

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
