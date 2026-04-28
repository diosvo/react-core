import type { Middleware, PayloadAction } from '@reduxjs/toolkit';

import { RootState } from '../store';

const logger: Middleware<{}, RootState> = (_store) => (next) => (action) => {
  const typedAction = action as PayloadAction;
  // console.log('[logger]', 'store', store);
  // console.log('[logger]', 'next', next);
  console.log('[logger]', 'action', typedAction.type);
  next(action);
};

// Currying
// N => 1

export default logger;
