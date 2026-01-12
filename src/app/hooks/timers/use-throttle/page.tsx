'use client';

import { useState } from 'react';

import useThrottle from './use-throttle';

export default function UseThrottlePage() {
  const [position, setPosition] = useState([0, 0]);
  const throttledPosition = useThrottle(position, 1000);

  return (
    <div onMouseMove={(e) => setPosition([e.clientY, e.clientX])}>
      <h1>
        Hover over this area to see throttled mouse position updates:
        <code className="bg-amber-100">
          {JSON.stringify(throttledPosition)}
        </code>
      </h1>
    </div>
  );
}
