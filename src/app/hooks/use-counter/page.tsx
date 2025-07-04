'use client';

import Link from 'next/link';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

import useCounter from './use-counter';

export default function useCounterPage() {
  const { count, increment, decrement, reset } = useCounter();

  return (
    <div>
      <div className="space-y-1">
        <h4 className="text-lg leading-none font-medium">useCounter</h4>
        <p className="text-muted-foreground">
          Manages counter state with memoized{' '}
          <Badge variant="secondary" asChild>
            <Link
              href="https://react.dev/reference/react/useCallback"
              target="_blank"
            >
              useCallback
            </Link>
          </Badge>{' '}
          for optimal performance.
        </p>
      </div>
      <Separator className="my-4" />
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
    </div>
  );
}
