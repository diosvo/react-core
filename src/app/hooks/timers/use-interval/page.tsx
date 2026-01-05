'use client';

import { useState } from 'react';
import useInterval from './use-interval';

export default function UseIntervalPage() {
  const [count, setCount] = useState(0);

  useInterval(() => setCount(count + 1), 1000);

  return <p>{count}</p>;
}
