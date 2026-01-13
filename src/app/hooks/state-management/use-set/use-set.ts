import { useCallback, useState } from 'react';

export interface UseSetReturn<T> {
  // The current set of items
  set: Readonly<Set<T>>;
  // Add item to the set
  add: (key: T) => void;
  // Check whether item exist in the set
  has: (key: T) => boolean;
  // Remove item from the set
  remove: (key: T) => void;
  // Toggle the presence of item in the set
  toggle: (key: T) => void;
  // Reset the set to initialState
  reset: () => void;
  // Remove all items in the set
  clear: () => void;
}

export default function useSet<T>(
  initialState = new Set<T>(),
): UseSetReturn<T> {
  const [set, setSet] = useState(initialState);

  const add = useCallback((item: T) => {
    setSet((prev) => {
      const newSet = new Set(Array.from(prev));
      newSet.add(item);
      return newSet;
    });
  }, []);

  const remove = useCallback(
    (item: T) =>
      setSet((prev) => {
        const newSet = new Set(Array.from(prev));
        newSet.delete(item);
        return newSet;
      }),
    [],
  );

  const has = useCallback((value: T) => set.has(value), [set]);

  const toggle = useCallback(
    (item: T) =>
      setSet((prev) => {
        const newSet = new Set(Array.from(prev));
        if (newSet.has(item)) {
          newSet.delete(item);
        } else {
          newSet.add(item);
        }
        return newSet;
      }),
    [],
  );

  const reset = useCallback(() => setSet(initialState), [initialState]);

  const clear = useCallback(() => setSet(new Set()), []);

  return {
    set,
    add,
    has,
    remove,
    toggle,
    reset,
    clear,
  };
}
