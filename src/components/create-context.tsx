'use client';

import * as React from 'react';

// <T,> or <T extends object> make it clear to the parser that T is a generic type parameter + not JSX syntax
export const createContext = <T,>() => {
  const Context = React.createContext<Nullable<T>>(null);

  const useContext = () => {
    const ctx = React.useContext(Context);

    if (ctx == null) {
      throw new Error('useContext must be inside a Provide with a value.');
    }

    return ctx;
  };

  return [useContext, Context.Provider] as const;
};
