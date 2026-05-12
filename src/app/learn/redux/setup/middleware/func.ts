import type { Middleware } from '@reduxjs/toolkit';

import { RootState } from '../store';

// Thunk / Func
const func: Middleware<{}, RootState> =
  ({ dispatch, getState }) =>
  (next) =>
  (action) => {
    if (typeof action === 'function') {
      return action(dispatch, getState);
    } else {
      return next(action);
    }
  };

export default func;
