import { PropsWithChildren } from 'react';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

export default function GridCard({
  items: Items,
}: {
  items: Array<PropsWithChildren<CardItem>>;
}) {
  if (!Items.length) {
    return <p className="text-center my-2">No items found.</p>;
  }

  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4">
      {Items.map(({ title, description, children }, index) => (
        <Card key={index}>
          <CardHeader>
            <CardTitle>{title}</CardTitle>
            <CardDescription className="text-xs">{description}</CardDescription>
          </CardHeader>
          <CardContent>{children}</CardContent>
        </Card>
      ))}
    </div>
  );
}
