import { useCallback, useState } from 'react';

export default function useCycle<T>(...args: Array<T>) {
  const [index, setIndex] = useState<number>(0);

  const cycle = useCallback(() => {
    setIndex((index) => (index + 1) % args.length);
  }, [args.length]);

  return [args[index], cycle] as const;
}
