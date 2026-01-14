'use client';

import { useState } from 'react';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ButtonGroup } from '@/components/ui/button-group';

import usePrevious from './use-previous';

export default function UsePreviousPage() {
  const [count, setCount] = useState<number>(0);
  const previousCount = usePrevious<number>(count);

  return (
    <>
      <ButtonGroup>
        <Button onClick={() => setCount((count) => count + 1)}>Increase</Button>
        <Button
          variant="outline"
          onClick={() => setCount((count) => count - 1)}
        >
          Decrease
        </Button>
      </ButtonGroup>
      <div className="flex gap-2 mt-3">
        <Badge variant="destructive">Current: {count}</Badge>
        <Badge variant="secondary">Previous: {previousCount}</Badge>
      </div>
    </>
  );
}
