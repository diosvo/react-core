'use client';

import { useState } from 'react';

export default function UseState({ initial = 1 }) {
  const [qty, setQty] = useState(initial);

  return (
    <div>
      <button onClick={() => setQty((q) => Math.max(1, q - 1))}>-</button>
      <span>{qty}</span>
      <button onClick={() => setQty((q) => q + 1)}>+</button>
    </div>
  );
}
