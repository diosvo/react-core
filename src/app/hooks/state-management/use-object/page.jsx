'use client';

import { Plus } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { ButtonGroup } from '@/components/ui/button-group';

import useObject from './use-object';

export default function UseObjectPage() {
  const [record, setRecord] = useObject({ a: 1, b: 2 });

  return (
    <>
      <ButtonGroup className="mb-2">
        <Button
          variant="secondary"
          onClick={() => setRecord((prev) => ({ a: prev.a + 1 }))}
        >
          <Plus /> a
        </Button>
        <Button
          variant="secondary"
          onClick={() => setRecord((prev) => ({ b: prev.b + 1 }))}
        >
          <Plus /> b
        </Button>
        <Button onClick={() => setRecord(() => ({ c: 3 }))}>
          <Plus /> c
        </Button>
      </ButtonGroup>
      <pre>{JSON.stringify(record, null, 2)}</pre>
    </>
  );
}
