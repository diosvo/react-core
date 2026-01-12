import { useEffect, useRef, useState } from 'react';

export default function useThrottle<T>(value: T, interval: number = 500): T {
  const [throttleValue, setThrottleValue] = useState(value);
  const lastUpdated = useRef<number>(undefined);

  useEffect(() => {
    const now = Date.now();

    // If enough time has passed since last update, update immediately
    if (lastUpdated.current && now >= lastUpdated.current + interval) {
      lastUpdated.current = now;
      setThrottleValue(value);
    } else {
      // Schedule an update after the remaining time
      const id = setTimeout(() => {
        lastUpdated.current = now;
        setThrottleValue(value);
      }, interval);

      return () => clearTimeout(id);
    }
  }, [value, interval]);

  return throttleValue;
}
