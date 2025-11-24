import { Suspense } from 'react';

export default function UiLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="px-2 py-4">
      <Suspense>{children}</Suspense>
    </div>
  );
}
