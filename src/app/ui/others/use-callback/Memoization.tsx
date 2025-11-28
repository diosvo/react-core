'use client';

import { memo, useCallback, useState } from 'react';

import { Button } from '@/components/ui/button';

// 1. memo() -> HOC / Avoid rerender when unneeded
// 2. useCallback()
// --- Reference types
// --- Only works when used with "React.memo()"

// Common (Purpose: reuse logic)
// - Hooks
// - HOC
// - Render props

function Content({ onIncrease }: { onIncrease: () => void }) {
  console.log('Re-render');

  return (
    <>
      <p>Content</p>
      <Button onClick={onIncrease} className="my-2">
        Increase
      </Button>
    </>
  );
}

const MemoizedContent = memo(Content);

export default function Memoization() {
  const [count, setCount] = useState<number>(0);

  // 🚩 Without useCallback, "handleIncrease" is recreated on every render
  // Arrow function in props -> new reference
  const handleIncrease = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []); // Empty dependency array -> return the previous reference

  return (
    <div>
      {/* When "count" changes, Content will be re-rendered without memo */}
      <MemoizedContent onIncrease={handleIncrease} />
      <p className="text-red-500">{count}</p>
    </div>
  );
}
