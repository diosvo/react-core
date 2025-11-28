'use client';

import { Button } from '@/components/ui/button';
import { useEffect, useRef, useState } from 'react';

export default function Stopwatch() {
  const [count, setCount] = useState<number>(60);
  const timerId = useRef<Nullable<number>>(null);
  const prevCount = useRef<Nullable<number>>(null);

  useEffect(() => {
    // But after "count" changes, it will store the value - 60
    prevCount.current = count;
  }, [count]);

  const handleStart = () => {
    timerId.current = window.setInterval(() => {
      setCount((prev) => prev - 1);
    }, 1000);

    console.log('Start -> ', count);
  };

  const handleStop = () => {
    if (timerId.current) {
      clearInterval(timerId.current);
    }

    console.log('Stop -> ', count);
  };

  return (
    <div>
      <p className="mb-2">{count}</p>
      <Button onClick={handleStart}>Start</Button>
      <Button variant="secondary" className="ml-2" onClick={handleStop}>
        Stop
      </Button>
    </div>
  );
}
