import { useState } from 'react';

export default function usePrevious<T>(state: T) {
  const [current, setCurrent] = useState<T>(state);
  const [previous, setPrevious] = useState<T>();

  // Update the previous state whenever the current state changes
  if (current !== state) {
    setPrevious(current);
    setCurrent(state);
  }

  return previous;
}
