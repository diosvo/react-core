'use client';

import { RefreshCcw } from 'lucide-react';
import { useEffect, useState } from 'react';

import { Button } from '@/components/ui/button';

function ProgressBar() {
  const [startTransition, setStartTransition] = useState<boolean>(false);

  // Start transition after first render and
  // never apply this effect ever again.
  useEffect(() => {
    if (startTransition) return;

    setStartTransition(true);
  });

  return (
    <div className="bg-gray-300 h-4 rounded-full overflow-hidden">
      <div
        className={[
          'bg-indigo-500 h-full origin-left scale-x-0 transition-transform duration-2000 ease-linear',
          startTransition && 'scale-x-100',
        ]
          .filter(Boolean)
          .join(' ')}
      />
    </div>
  );
}

export default function DynamicProgressBars() {
  const [bars, setBars] = useState<number>(0);

  return (
    <div className="flex flex-col gap-4 justify-center">
      <div className="flex items-center justify-between">
        <h2>Dyamic Progress Bars</h2>
        <div>
          <Button type="reset" variant="outline" onClick={() => setBars(0)}>
            <RefreshCcw />
            Reset
          </Button>
          <Button className="ml-2" onClick={() => setBars(bars + 1)}>
            Add
          </Button>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        {Array(bars)
          .fill(0)
          .map((_, index) => (
            <ProgressBar key={index} />
          ))}
      </div>
    </div>
  );
}
