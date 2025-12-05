'use client';

import { RefreshCcw } from 'lucide-react';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

import useCycle from './use-cycle';

export default function UseCyclePage() {
  const [mode, cycle] = useCycle('low', 'medium', 'high');

  return (
    <>
      <div className="mb-3">
        <Button onClick={cycle}>
          <RefreshCcw />
          Cycle
        </Button>
      </div>
      <Badge variant="destructive">State: {mode}</Badge>
    </>
  );
}
