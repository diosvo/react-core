'use client';

import { RefreshCcw } from 'lucide-react';
import { useEffect, useState } from 'react';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

import useEffectOnce from './use-effect-once';

export default function UseEffectOncePage() {
  const [count, setCount] = useState<number>(0);
  const [renderCount, setRenderCount] = useState<number>(1);

  useEffectOnce(() => {
    setCount((c) => c + 1);
    console.log('🎯 useEffectOnce: Running effect once on mount');

    return () => {
      console.log('🧹 useEffectOnce: Running clean-up of effect on unmount');
    };
  });

  useEffect(() => {
    // Track renders safely after hydration
    console.log(`🔄 Component rendered ${renderCount} time(s)`);
  }, [renderCount]);

  return (
    <div className="flex flex-col items-stretch gap-3">
      <p>Open the browser console to observe logs.</p>
      <Button onClick={() => setRenderCount((prev) => prev + 1)}>
        <RefreshCcw />
        Re-render
      </Button>
      <div className="flex justify-between">
        <Badge variant="destructive">Effect Count: {count}</Badge>
        <Badge variant="secondary">Render Count: {renderCount}</Badge>
      </div>
    </div>
  );
}
