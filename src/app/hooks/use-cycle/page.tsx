'use client';

import { RefreshCcw } from 'lucide-react';

import HookLayout from '@/components/hook-layout';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

import useCycle from './use-cycle';

export default function useCyclePage() {
  const [mode, cycle] = useCycle('low', 'medium', 'high');

  return (
    <HookLayout
      title="useCycle"
      description={
        <>
          Implement by incrementing the index by 1 modulo the length of the
          sequence
        </>
      }
    >
      <div className="mb-3">
        <Button onClick={cycle}>
          <RefreshCcw />
          Cycle
        </Button>
      </div>
      <Badge variant="destructive">State: {mode}</Badge>
    </HookLayout>
  );
}
