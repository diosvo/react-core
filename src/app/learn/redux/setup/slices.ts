import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

import { initialState } from './toolkit';

// ✨ Slice
const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    // actions => action handler
    increment(state) {
      state.value += 1;
    },
    decrement(state) {
      state.value -= 1;
    },
    incrementByAmount(state, action: PayloadAction<number>) {
      state.value += action.payload;
    },
  },
});

// console.log('counterSlice', counterSlice);

export const { increment, decrement, incrementByAmount } = counterSlice.actions;
// should be exported by default, and imported as reducer in store.ts
export default counterSlice.reducer;
