import type { PayloadAction, UnknownAction } from '@reduxjs/toolkit';
import { createAction, createReducer } from '@reduxjs/toolkit';

import { CounterState } from './types';

function isActionWithNumberPayload(
  action: UnknownAction,
): action is PayloadAction<number> {
  return typeof action.payload === 'number';
} // = incrementByAmount

// Actions

export const increment = createAction('counter/increment');
export const decrement = createAction('counter/decrement');
const incrementByAmount = createAction('counter/incrementByAmount');

// Reducers
export const initialState = { value: 0 } satisfies CounterState as CounterState;

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

export default reducer;
