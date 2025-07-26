import { Dispatch, SetStateAction, useCallback, useState } from 'react';

export default function useToggle(
  defaultValue = false
): [boolean, () => void, Dispatch<SetStateAction<boolean>>] {
  const [value, setValue] = useState<boolean>(defaultValue);

  const toggle = useCallback(() => {
    setValue((x: boolean) => !x);
  }, []);

  return [value, toggle, setValue] as const;
}
