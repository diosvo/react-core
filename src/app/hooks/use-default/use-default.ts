import { useState } from 'react';

export default function useDefault<T>(
  defaultValue: T,
  initialValue: T | (() => T)
) {
  const [value, setValue] = useState<Nullish<T>>(initialValue);

  if (value == null) {
    return [defaultValue, setValue] as const;
  }

  return [value, setValue] as const;
}
