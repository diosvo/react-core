'use client';

import { BadgeQuestionMark } from 'lucide-react';
import { useState } from 'react';

import HookLayout from '@/components/hook-layout';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

import usePrevious from './use-previous';

export default function usePreviousPage() {
  const [count, setCount] = useState<number>(0);
  const previousCount = usePrevious<number>(count);

  return (
    <HookLayout
      title="usePrevious"
      description={
        <>
          <p>Returns the previous value of a state.</p>
          <Alert variant="default" className="mt-2">
            <BadgeQuestionMark />
            <AlertTitle>
              Set the states during render and not in{' '}
              <Badge variant="secondary">useEffect</Badge>
            </AlertTitle>
            <AlertDescription>
              No need to waste one render cycle to update the previous state.
            </AlertDescription>
          </Alert>
        </>
      }
    >
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
    </HookLayout>
  );
}
