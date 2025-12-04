'use client';

import { useState } from 'react';

import HookLayout from '@/components/hook-layout';

import useTimeout from './use-timeout';

export default function useTimeoutPage() {
  const [loading, setLoading] = useState<boolean>(true);

  useTimeout(() => setLoading(false), 1000);

  return (
    <HookLayout
      title="useTimeout"
      description={<>Invokes a callback function after a specified delay.</>}
    >
      <div>
        <p>{loading ? 'Loading' : 'Ready'}</p>
      </div>
    </HookLayout>
  );
}
