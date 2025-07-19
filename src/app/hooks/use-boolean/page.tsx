'use client';

import HookBadge from '@/components/hook-badge';
import HookLayout from '@/components/hook-layout';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

import useBoolean from './use-boolean';

export default function useBooleanPage() {
  const { value, setTrue, setFalse } = useBoolean();

  return (
    <HookLayout
      title="useBoolean"
      description={
        <>
          Manages boolean state with memoized <HookBadge hook="useCallback" />
          for optimal performance.
        </>
      }
    >
      <div className="flex items-center gap-2">
        <Button
          variant="destructive"
          onClick={() => (value ? setFalse() : setTrue())}
        >
          Toggle
        </Button>
        <Badge>{value ? 'enabled' : 'disabled'}</Badge>
      </div>
    </HookLayout>
  );
}
