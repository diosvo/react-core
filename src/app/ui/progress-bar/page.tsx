'use client';

import UiLayout from '@/components/ui-layout';
import { Separator } from '@/components/ui/separator';

import ProgressBar from '.';
import DynamicProgressBars from './dynamic';

// 1. Progress Bar: Single bar with a given value
// 2. Progress Bars I: Add bar with animation
// 3. Progress Bars II: Add bar/s and wait for animation to complete one by one
// 4. Progress Bars III: Add bar/s and fill up animation concurrently, up to a limit of 3

export default function ProgressBarPage() {
  return (
    <UiLayout
      title="Progress Bar"
      implementation={
        <ul>
          <li>
            · Animation - <code>transform</code>
          </li>
          <li>
            · Detect when CSS transition is completed -{' '}
            <code>onTransitionEnd</code>
          </li>
        </ul>
      }
      description={
        <ul>
          <li>· A11y</li>
          <li>· Fill the bar from 0 to 100 without using JS</li>
        </ul>
      }
    >
      <div className="grid grid-cols-2 gap-4">
        {[0, 25, 50, 75, 100, 2, -10, 120].map((value) => (
          <div key={value}>
            <span className="mb-2 text-sm">{value}</span>
            <ProgressBar value={value} />
          </div>
        ))}
      </div>
      <Separator className="my-4" />
      <DynamicProgressBars />
    </UiLayout>
  );
}
