import type { Middleware } from '@reduxjs/toolkit';

import { RootState } from '../store';

// Thunk / Func
const func: Middleware<{}, RootState> =
  ({ dispatch, getState }) =>
  (next) =>
  (action) => {
    if (typeof action === 'function') {
      action(dispatch, getState);
    } else {
      next(action);
    }
  };

export default func;
