import { ReactNode } from 'react';

import { Separator } from '@/components/ui/separator';

export default function HookLayout({
  title,
  description,
  children,
}: {
  title: string;
  description: ReactNode;
  children: ReactNode;
}) {
  return (
    <div>
      <div className="space-y-1">
        <h4 className="text-lg leading-none font-medium">{title}</h4>
        <p className="text-muted-foreground">{description}</p>
      </div>
      <Separator className="my-4" />
      {children}
    </div>
  );
}
