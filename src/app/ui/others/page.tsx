import { PropsWithChildren } from 'react';

import UiLayout from '@/components/ui-layout';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

import HolyGrail from './HolyGrail';

const Items: Array<PropsWithChildren<{ title: string; description: string }>> =
  [
    {
      title: 'Holy Grail',
      description:
        'A classic web layout with header, footer, nav, main, and sidebar.',
      children: <HolyGrail />,
    },
  ];

export default function OthersPage() {
  return (
    <UiLayout title="Others">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4">
        {Items.map(({ title, description, children }, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>{title}</CardTitle>
              <CardDescription>{description}</CardDescription>
            </CardHeader>
            <CardContent>{children}</CardContent>
          </Card>
        ))}
      </div>
    </UiLayout>
  );
}
