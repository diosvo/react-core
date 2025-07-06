'use client';

import HookLayout from '@/components/hook-layout';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

import useCounter from './use-counter';

export default function useCounterPage() {
  const { count, increment, decrement, reset } = useCounter();

  return (
    <HookLayout
      title="useCounter"
      description={
        <>
          Manages counter state with memoized{' '}
          <Badge variant="secondary" asChild>
            <a
              href="https://react.dev/reference/react/useCallback"
              target="_blank"
            >
              useCallback
            </a>
          </Badge>{' '}
          for optimal performance.
        </>
      }
    >
      <div className="flex items-center gap-1 mb-3">
        <Button onClick={increment}>Increment</Button>
        <Button variant="outline" onClick={decrement}>
          Decrement
        </Button>
        <Button variant="secondary" onClick={reset}>
          Reset
        </Button>
      </div>
      <Badge variant="destructive">Count: {count}</Badge>
    </HookLayout>
  );
}
