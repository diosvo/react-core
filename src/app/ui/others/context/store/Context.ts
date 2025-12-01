'use client';

import { createContext, useContext } from 'react';

const Context = createContext({});

export default Context;
export const useStore = () => useContext(Context);
