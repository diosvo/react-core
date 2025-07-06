'use client';

import { useState } from 'react';

import HookLayout from '@/components/hook-layout';
import { Badge } from '@/components/ui/badge';

import useClickAnywhere from './use-click-anywhere';

export default function useClickAnywherePage() {
  const [count, setCount] = useState<number>(0);

  useClickAnywhere(() => {
    setCount((prev) => prev + 1);
  });

  return (
    <HookLayout
      title="useClickAnywhere"
      description="Handle click events anywhere on the document."
    >
      <Badge variant="destructive">Count: {count}</Badge>
    </HookLayout>
  );
}
