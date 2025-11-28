'use client';

import { useLayoutEffect, useState } from 'react';

import { Button } from '@/components/ui/button';

export default function ResetCoutner() {
  const [count, setCount] = useState<number>(0);

  // Prevent flickering
  useLayoutEffect(() => {
    if (count > 3) {
      setCount(0);
    }
  });

  const handleIncrease = () => setCount(count + 1);

  return (
    <div>
      <p className="mb-2">{count}</p>
      <Button onClick={handleIncrease}>Increase</Button>
    </div>
  );
}
