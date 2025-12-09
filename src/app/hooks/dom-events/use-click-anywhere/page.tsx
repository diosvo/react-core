'use client';

import { useState } from 'react';

import { Badge } from '@/components/ui/badge';

import useClickAnywhere from './use-click-anywhere';

export default function useClickAnywherePage() {
  const [count, setCount] = useState<number>(0);

  useClickAnywhere(() => {
    setCount((prev) => prev + 1);
  });

  return <Badge variant="destructive">Count: {count}</Badge>;
}
