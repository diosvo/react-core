'use client';

import * as React from 'react';

export const createContext = <T extends {}>() => {
  const Context = React.createContext<Nullish<T>>(undefined);

  const useContext = () => {
    const ctx = React.useContext(Context);

    if (ctx == null) {
      throw new Error('useContext must be inside a Provide with a value.');
    }

    return ctx;
  };

  return [useContext, Context.Provider] as const;
};
