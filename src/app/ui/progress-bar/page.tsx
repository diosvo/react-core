'use client';

import UiLayout from '@/components/ui-layout';
import ProgressBar from '.';

export default function ProgressBarPage() {
  return (
    <UiLayout
      title="Progress Bar"
      description={
        <ul>
          <li>· A11y</li>
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
    </UiLayout>
  );
}
