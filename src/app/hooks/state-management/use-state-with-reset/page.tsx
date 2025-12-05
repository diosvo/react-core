'use client';

import { RefreshCcw } from 'lucide-react';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

import useStateWithReset from './use-state-with-reset';

export default function UseStateWithResetPage() {
  const [value, setValue, resetValue] = useStateWithReset(() => 'Dios Vo');

  return (
    <>
      <Badge variant="secondary">Value: {value}</Badge>
      <div className="flex w-full items-center gap-2 mt-2">
        <Input
          value={value}
          placeholder="Name"
          onChange={(e) => setValue(e.target.value)}
        />
        <Button onClick={resetValue}>
          <RefreshCcw />
          Reset
        </Button>
      </div>
    </>
  );
}
