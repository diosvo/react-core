import SearchInput from '@/components/SearchInput';
import { Suspense } from 'react';

export default function HookLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Suspense>
      <div className="flex flex-col gap-4 max-w-7xl mx-auto w-full p-4">
        <SearchInput />
        {children}
      </div>
    </Suspense>
  );
}
