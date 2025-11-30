'use client';

import { PropsWithChildren, useState } from 'react';

import { createContext } from '@/components/create-context';

type ThemeProps = {
  dark: boolean;
  toggleTheme: () => void;
};

// 1️⃣ Create context
const [useContext, Provider] = createContext<ThemeProps>();

// 2️⃣ Provider
export function ThemeProvider(props: PropsWithChildren) {
  const [dark, setDark] = useState<boolean>(true);

  const toggleTheme = () => setDark(!dark);

  const value = {
    dark,
    toggleTheme,
  };

  return <Provider value={value}>{props.children}</Provider>;
}

// 3️⃣ Consumer
export const useTheme = useContext;
