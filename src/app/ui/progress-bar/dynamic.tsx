'use client';

import { Plus, RefreshCcw } from 'lucide-react';
import { useEffect, useState } from 'react';

import { Button } from '@/components/ui/button';

type ProgressBarProps = {
  isEmpty: boolean;
  onCompleted: () => void;
};

function ProgressBar({ isEmpty, onCompleted }: Readonly<ProgressBarProps>) {
  const [startTransition, setStartTransition] = useState<boolean>(false);

  // Start transition when the bar is no longer empty.
  useEffect(() => {
    if (isEmpty || startTransition) return;

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
        onTransitionEnd={onCompleted}
      />
    </div>
  );
}

export default function DynamicProgressBars() {
  const [bars, setBars] = useState<number>(0);
  const [numFilledUpBars, setNumFilledUpBars] = useState<number>(0);

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
            <Plus />
            Add
          </Button>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        {Array(bars)
          .fill(0)
          .map((_, index) => (
            <ProgressBar
              key={index}
              isEmpty={index > numFilledUpBars}
              onCompleted={() => setNumFilledUpBars(numFilledUpBars + 1)}
            />
          ))}
      </div>
    </div>
  );
}
