import { useEffect, useRef } from 'react';

export default function useInterval(
  callback: () => void,
  delay: Nullable<number>,
) {
  const savedCallback = useRef(callback);
  savedCallback.current = callback;

  useEffect(() => {
    if (delay == null) return;

    const id = setInterval(() => {
      savedCallback.current();
    }, delay);

    return () => {
      clearInterval(id);
    };
  }, [delay]);
}
