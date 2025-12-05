'use client';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

import useCounter from './use-counter';

export default function UseCounterPage() {
  const { count, increment, decrement, reset } = useCounter();

  return (
    <>
      <div className="flex flex-wrap items-center gap-1 mb-3">
        <Button onClick={increment}>Increment</Button>
        <Button variant="outline" onClick={decrement}>
          Decrement
        </Button>
        <Button variant="secondary" onClick={reset}>
          Reset
        </Button>
      </div>
      <Badge variant="destructive">Count: {count}</Badge>
    </>
  );
}
