'use client';

import Link from 'next/link';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

import useBoolean from './use-boolean';

export default function useBooleanPage() {
  const { value, setTrue, setFalse } = useBoolean();

  return (
    <div>
      <div className="space-y-1">
        <h4 className="text-lg leading-none font-medium">useBoolean</h4>
        <p className="text-muted-foreground">
          Manages boolean state with memoized{' '}
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
      <div className="flex items-center gap-2">
        <Button
          variant="destructive"
          onClick={() => (value ? setFalse() : setTrue())}
        >
          Toggle
        </Button>
        <Badge>{value ? 'enabled' : 'disabled'}</Badge>
      </div>
    </div>
  );
}
