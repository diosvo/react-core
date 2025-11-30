'use client';

import { Moon, Sun } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { ThemeProvider, useTheme } from './ThemeProvider';

// Theme: Dark / Light

// State
// Comp A: Theme => Comp B: Content => Comp C: Paragraph

function Paragraph() {
  const { dark } = useTheme();

  return (
    <div
      className="p-2"
      style={{
        backgroundColor: dark ? '#333' : 'white',
        color: dark ? 'white' : '#333',
      }}
    >
      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
    </div>
  );
}

function Content() {
  return (
    <div>
      <Paragraph />
    </div>
  );
}

function Main() {
  const { dark, toggleTheme } = useTheme();

  return (
    <>
      <Button onClick={toggleTheme} className="mb-2">
        {dark ? <Moon /> : <Sun />}
      </Button>
      <Content />
    </>
  );
}

export default function Theme() {
  return (
    <ThemeProvider>
      <Main />
    </ThemeProvider>
  );
}
