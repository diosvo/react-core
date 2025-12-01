'use client';

import { useReducer } from 'react';

import reducer, { initialState } from './2-reducer';
import Context from './Context';
import logger from './logger';

export default function Provider({ children }) {
  // ❓ Why useReducer
  // Include many states => more complex logic
  // Same as Reduc => Centralize state flow
  const [state, dispatch] = useReducer(logger(reducer), initialState);

  return <Context value={{ state, dispatch }}>{children}</Context>;
}
