'use client';

import { useState } from 'react';

import useTimeout from './use-timeout';

export default function UseTimeoutPage() {
  const [loading, setLoading] = useState<boolean>(true);

  useTimeout(() => setLoading(false), 10000);

  return <p>{loading ? 'Loading' : 'Ready'}</p>;
}
