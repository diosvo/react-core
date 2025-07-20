'use client';

import { SquareDashedMousePointer } from 'lucide-react';

import HookLayout from '@/components/hook-layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

import useFocus from './use-focus';

export default function useFocusPage() {
  const [ref, focus] = useFocus();

  return (
    <HookLayout
      title="useFocus"
      description={<>Enable programmatic focusing of an element.</>}
    >
      <div className="flex gap-2 ">
        <Input ref={ref} type="text" placeholder="Name" />
        <Button onClick={focus}>
          <SquareDashedMousePointer />
          Focus
        </Button>
      </div>
    </HookLayout>
  );
}
