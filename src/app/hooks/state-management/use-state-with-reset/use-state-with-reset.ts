import { useCallback, useState } from 'react';

export default function useStateWithReset<T>(initialValue: T | (() => T)) {
  // Turn on when initialValue is only type T
  // const initialState = useMemo(() => {
  //   if (
  //     typeof initialStateOrInitializer === 'function' &&
  //     initialStateOrInitializer.length === 0
  //   ) {
  //     return initialStateOrInitializer();
  //   }

  //   return initialStateOrInitializer;
  // }, []);

  const [value, setValue] = useState<T>(initialValue);

  const resetValue = useCallback(() => {
    setValue(initialValue);
  }, [initialValue]);

  return [value, setValue, resetValue] as const;
}
