'use client';

import { Pause, Play, Plus, RefreshCcw } from 'lucide-react';
import { useState } from 'react';

import { Button } from '@/components/ui/button';

const CONCURRENCY_LIMIT = 3;
const INITIAL_PROGRESSION = [0];

function ProgressBar({ progress }: Readonly<{ progress: number }>) {
  return (
    <div className="bg-gray-100 h-4 rounded-full overflow-hidden">
      <div
        className="bg-indigo-500 h-full origin-left"
        style={{ transform: `scaleX(${progress / 100})` }}
      />
    </div>
  );
}

export default function DynamicProgressBars() {
  const [progression, setProgression] =
    useState<Array<number>>(INITIAL_PROGRESSION);
  const [timerId, setTimerId] = useState<NodeJS.Timeout | undefined>();

  function add() {
    setProgression(progression.concat(0));
  }

  function start() {
    const timer = setInterval(() => {
      setProgression((currProgression) => {
        // Find the bars which aren't full
        const nonFullBars = currProgression
          .map((value, index) => ({ value, index }))
          .filter(({ value }) => value < 100);
        // All bars are full, none to increment
        if (nonFullBars.length === 0) {
          return currProgression;
        }

        // Get the first LIMIT non-full bars and increment them.
        const barsToIncrement = nonFullBars.slice(0, CONCURRENCY_LIMIT);
        const newProgression = currProgression.slice();
        for (const { index } of barsToIncrement) {
          newProgression[index] += 0.5;
        }

        return newProgression;
      });
    }, 10);

    setTimerId(timer);
  }

  function stop() {
    clearInterval(timerId);
    setTimerId(undefined);
  }

  function reset() {
    stop();
    setProgression(INITIAL_PROGRESSION);
  }

  // Derived state to determine if the bars are progressing
  const isProgressing = timerId != null;

  return (
    <div className="flex flex-col gap-4 justify-center">
      <div className="flex items-center justify-between">
        <h2>Dyamic Progress Bars</h2>
        <div>
          <Button className="ml-2" onClick={() => add()}>
            <Plus />
            Add
          </Button>
          <Button
            variant="destructive"
            className="ml-2"
            onClick={() => (isProgressing ? stop() : start())}
          >
            {isProgressing ? <Pause /> : <Play />}
            {isProgressing ? 'Pause' : 'Start'}
          </Button>
          <Button type="reset" variant="outline" onClick={() => reset()}>
            <RefreshCcw />
            Reset
          </Button>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        {progression.map((progress, index) => (
          <ProgressBar key={index} progress={progress} />
        ))}
      </div>
      <pre>{JSON.stringify({ isProgressing, progression }, null, 2)}</pre>
    </div>
  );
}
