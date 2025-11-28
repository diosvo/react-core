'use client';

import { memo, useState } from 'react';

import { Button } from '@/components/ui/button';

// 1. memo() -> HOC / Avoid rerender when unneeded
// 2. useCallback()

// Common (Purpose: reuse logic)
// - Hooks
// - HOC
// - Render props

function Content() {
  console.log('Re-render'); // Enable without memo

  return <p>Content</p>;
}

const MemoizedContent = memo(Content);

export default function Memoization() {
  const [count, setCount] = useState<number>(0);

  const handleIncrease = () => {
    setCount(count + 1);
  };

  return (
    <div>
      {/* When "count" changes, Content will be re-rendered without memo */}
      <MemoizedContent />
      <p className="text-red-500 my-2">{count}</p>
      <Button onClick={handleIncrease}>Increase</Button>
    </div>
  );
}
