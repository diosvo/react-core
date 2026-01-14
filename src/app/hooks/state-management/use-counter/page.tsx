'use client';

import { ArrowDown, ArrowUp, Recycle } from 'lucide-react';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ButtonGroup } from '@/components/ui/button-group';

import useCounter from './use-counter';

export default function UseCounterPage() {
  const { count, increment, decrement, reset } = useCounter();

  return (
    <>
      <ButtonGroup>
        <Button onClick={increment}>
          <ArrowUp />
        </Button>
        <Button variant="outline" onClick={decrement}>
          <ArrowDown />
        </Button>
        <Button variant="destructive" onClick={reset}>
          <Recycle />
        </Button>
      </ButtonGroup>
      <Badge variant="secondary" className="mt-3">
        Count: {count}
      </Badge>
    </>
  );
}
