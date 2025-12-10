import { useEffect, useRef } from 'react';

export default function useTimeout(
  callback: () => void,
  delay: Nullable<number>,
) {
  const latestCallback = useRef(callback);
  latestCallback.current = callback;

  useEffect(() => {
    if (delay === null) return;

    const timerId = setTimeout(() => {
      latestCallback.current();
    }, delay);

    return () => {
      clearTimeout(timerId);
    };
  }, [delay]);
}
