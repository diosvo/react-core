import { Suspense } from 'react';

export default function HookLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-4 max-w-7xl mx-auto w-full p-4">
      <Suspense>{children}</Suspense>
    </div>
  );
}
