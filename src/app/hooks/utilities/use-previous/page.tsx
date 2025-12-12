'use client';

import { useState } from 'react';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

import usePrevious from './use-previous';

export default function UsePreviousPage() {
  const [count, setCount] = useState<number>(0);
  const previousCount = usePrevious<number>(count);

  return (
    <>
      <div className="flex items-center gap-1 mb-3">
        <Button onClick={() => setCount((count) => count + 1)}>Increase</Button>
        <Button
          variant="outline"
          onClick={() => setCount((count) => count - 1)}
        >
          Decrease
        </Button>
      </div>
      <div className="flex gap-2">
        <Badge variant="destructive">Current: {count}</Badge>
        <Badge variant="secondary">Previous: {previousCount}</Badge>
      </div>
    </>
  );
}
