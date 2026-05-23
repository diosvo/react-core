import type { PayloadAction } from '@reduxjs/toolkit';
import { Middleware } from '@reduxjs/toolkit';
import { isEqual } from 'lodash';

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

    const {
      url,
      method = 'GET',
      data,
      onStart,
      onSuccess,
      onError,
    } = typedAction.payload;

    if (onStart) dispatch({ type: onStart });

    // Pass the action to the next middleware or reducers (dispatch success or failure actions)
    next(action);

    // Call the API
    try {
      const response = await fetch(
        'https://jsonplaceholder.typicode.com' + url,
        {
          method,
          body: !['GET', 'DELETE'].includes(method)
            ? JSON.stringify(data)
            : null,
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
        },
      );
      const result = await response.json();
      // General
      dispatch(apiRequestSuccess(result));
      // Specific
      // Support passing data to populate inside the reducer
      if (onSuccess)
        dispatch({
          type: onSuccess,
          payload: isEqual(method, 'DELETE') ? data : result,
        });
    } catch (error) {
      // General
      dispatch(apiRequestFailed((error as Error).message));
      // Specific
      if (onError) dispatch({ type: onError, payload: error });
    }

    // We don't want to pass this action to the next middleware or reducers
  };

export default api;
