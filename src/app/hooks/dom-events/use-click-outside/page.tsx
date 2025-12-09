'use client';

import { useRef } from 'react';

import { Button } from '@/components/ui/button';

import useClickOutside from './use-click-outside';

export default function UseClickOutsidePage() {
  const target = useRef(null);
  useClickOutside(target, () => console.log('Clicked outside'));

  return (
    <div className="flex flex-col gap-4">
      <Button ref={target}>Click outside me</Button>
      <Button variant="destructive">Maybe here?</Button>
    </div>
  );
}
