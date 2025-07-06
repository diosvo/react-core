'use client';

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
          Manages boolean state with memoized{' '}
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
