'use client';

import useWindowSize from './use-window-size';

export default function UseWindowSizePage() {
  const screen = useWindowSize();

  return (
    <div>
      <p>The current window dimensions are:</p>
      <code>{JSON.stringify(screen, null, 2)}</code>
    </div>
  );
}
