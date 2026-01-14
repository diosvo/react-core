'use client';

import { RefreshCcw } from 'lucide-react';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ButtonGroup } from '@/components/ui/button-group';
import { Input } from '@/components/ui/input';

import useStateWithReset from './use-state-with-reset';

export default function UseStateWithResetPage() {
  const [value, setValue, resetValue] = useStateWithReset(() => 'Dios Vo');

  return (
    <>
      <Badge variant="secondary">Value: {value}</Badge>
      <ButtonGroup className="mt-2">
        <Input
          value={value}
          placeholder="Name"
          onChange={(e) => setValue(e.target.value)}
        />
        <Button onClick={resetValue}>
          <RefreshCcw />
        </Button>
      </ButtonGroup>
    </>
  );
}
