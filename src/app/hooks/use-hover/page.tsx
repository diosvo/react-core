'use client';

import HookLayout from '@/components/hook-layout';
import useHover from './use-hover';

export default function useHoverPage() {
  const [ref, hovered] = useHover();

  return (
    <HookLayout
      title="useHover"
      description={<>Tracks whether an element is being hovered.</>}
    >
      <div
        ref={ref}
        className={`${hovered ? 'bg-cyan-300' : 'bg-inherit'}`}
        data-testid="area"
      >
        {hovered ? <span data-testid="hovering">Hovered</span> : 'Not hovered'}
      </div>
    </HookLayout>
  );
}
