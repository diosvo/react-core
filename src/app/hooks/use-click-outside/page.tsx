'use client';

import { useRef } from 'react';

import HookLayout from '@/components/hook-layout';
import { Button } from '@/components/ui/button';

import useClickOutside from './use-click-outside';

export default function useClickOutsidePage() {
  const target = useRef(null);
  useClickOutside(target, () => console.log('Clicked outside'));

  return (
    <HookLayout
      title="useClickOutside"
      description="Detect clicks outside of a specified element."
    >
      <div className="flex flex-col gap-4">
        <Button ref={target}>Click outside me</Button>
        <Button variant="destructive">Maybe here?</Button>
      </div>
    </HookLayout>
  );
}
