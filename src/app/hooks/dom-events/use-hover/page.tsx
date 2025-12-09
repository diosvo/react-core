'use client';

import useHover from './use-hover';

export default function UseHoverPage() {
  const [ref, hovered] = useHover();

  return (
    <div
      ref={ref}
      className={`${hovered ? 'bg-cyan-300' : 'bg-inherit'}`}
      data-testid="area"
    >
      {hovered ? <span data-testid="hovering">Hovered</span> : 'Not hovered'}
    </div>
  );
}
