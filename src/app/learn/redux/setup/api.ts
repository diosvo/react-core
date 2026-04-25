import { createAction } from '@reduxjs/toolkit';
import { ApiRequest } from './types';

// Consistent action types

export const apiRequestBegan = createAction(
  'api/requestBegan',
  (payload: ApiRequest) => ({ payload }),
);
export const apiRequestSuccess = createAction('api/requestSuccess');
export const apiRequestFailed = createAction(
  'api/requestFailed',
  (reason: string) => ({ payload: reason }),
);
