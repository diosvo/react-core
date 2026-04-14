import type { PayloadAction, UnknownAction } from '@reduxjs/toolkit';
import { createReducer, createSlice } from '@reduxjs/toolkit';

interface CounterState {
  value: number;
}

function isActionWithNumberPayload(
  action: UnknownAction,
): action is PayloadAction<number> {
  return typeof action.payload === 'number';
} // = incrementByAmount

// Actions

// export const increment = createAction('counter/increment');
// export const decrement = createAction('counter/decrement');
// const incrementByAmount = createAction('counter/incrementByAmount');

// Reducers
const initialState = { value: 0 } satisfies CounterState as CounterState;

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(increment, (state, action) => {
      state.value += 1;
    })
    // Chain calls, or have separate `builder.addCase()` lines each time
    .addCase(decrement, (state, action) => {
      state.value -= 1;
    })
    // A "matcher function" to incoming actions
    .addMatcher(isActionWithNumberPayload, (state, action) => {
      state.value += action.payload;
    })
    // A default case if no other handlers matched
    .addDefaultCase((state, action) => {});
});

// ✨ Slice
const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
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

export const { increment, decrement, incrementByAmount } = counterSlice.actions;
export default counterSlice.reducer;
