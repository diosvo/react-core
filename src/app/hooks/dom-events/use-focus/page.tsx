'use client';

import { SquareDashedMousePointer } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { ButtonGroup } from '@/components/ui/button-group';
import { Input } from '@/components/ui/input';

import useFocus from './use-focus';

export default function UseFocusPage() {
  const [ref, focus] = useFocus();

  return (
    <ButtonGroup>
      <Input ref={ref} type="text" placeholder="Name" />
      <Button onClick={focus}>
        <SquareDashedMousePointer />
        Focus
      </Button>
    </ButtonGroup>
  );
}
