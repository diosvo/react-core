import type { Middleware, PayloadAction } from '@reduxjs/toolkit';

import { RootState } from '../store';

const toast: Middleware<{}, RootState> = (_store) => (next) => (action) => {
  const typedAction = action as PayloadAction<{ message: string }>;

  if (typedAction.type === 'error') {
    console.log('[toastify]', typedAction.payload.message);
  } else {
    return next(typedAction);
  }
};

export default toast;
