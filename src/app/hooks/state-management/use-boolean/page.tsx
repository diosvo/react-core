'use client';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

import useBoolean from './use-boolean';

export default function UseBooleanPage() {
  const { value, setTrue, setFalse } = useBoolean();

  return (
    <div className="flex items-center gap-2">
      <Button
        variant="destructive"
        onClick={() => (value ? setFalse() : setTrue())}
      >
        Toggle
      </Button>
      <Badge>{value ? 'enabled' : 'disabled'}</Badge>
    </div>
  );
}
