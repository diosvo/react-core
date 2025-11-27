'use client';

import { useEffect, useState } from 'react';

export default function Timer() {
  const [countdown, setCountdown] = useState<number>(5);

  useEffect(() => {
    const timerId = setInterval(() => {
      setCountdown((prev) => {
        if (prev > 0) return prev - 1;
        return prev;
      });
      // console.log('Countdown...'); // Enable then direct to another page to see how it effects
    }, 1000);

    return () => clearInterval(timerId);
  }, [countdown]);

  return <h1>Remaining time: {countdown}</h1>;
}
