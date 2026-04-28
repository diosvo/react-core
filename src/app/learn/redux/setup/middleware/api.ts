import type { PayloadAction } from '@reduxjs/toolkit';
import { Middleware } from '@reduxjs/toolkit';

import { RootState } from '../store';
import { ApiRequest } from '../types';

import { apiRequestBegan, apiRequestFailed, apiRequestSuccess } from '../api';

const api: Middleware<{}, RootState> =
  ({ dispatch }) =>
  (next) =>
  async (action) => {
    const typedAction = action as PayloadAction<ApiRequest>;

    if (typedAction.type !== apiRequestBegan.type) return next(action);
    if (!typedAction.payload) return;

    const { url, method, data, onStart, onSuccess, onError } =
      typedAction.payload;

    if (onStart) dispatch({ type: onStart });

    // Pass the action to the next middleware or reducers (dispatch success or failure actions)
    next(action);

    // Call the API
    try {
      const response = await fetch(
        'https://jsonplaceholder.typicode.com' + url,
        {
          method,
          body: JSON.stringify(data),
        },
      );
      const result = await response.json();
      // General
      dispatch(apiRequestSuccess(result));
      // Specific
      if (onSuccess) dispatch({ type: onSuccess, payload: result });
    } catch (error) {
      // General
      dispatch(apiRequestFailed((error as Error).message));
      // Specific
      if (onError) dispatch({ type: onError, payload: error });
    }

    // We don't want to pass this action to the next middleware or reducers
  };

export default api;
