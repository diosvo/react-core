'use client';

import { useQueryState } from 'nuqs';
import { type PropsWithChildren } from 'react';

import GridCard from '@/components/ListItems';
import { Separator } from '@/components/ui/separator';

import { useSearchParams } from '@/lib/utils';
import FilterBar from './FilterBar';

export default function ListItems({
  items,
}: {
  items: Record<string, Array<PropsWithChildren<CardItem>>>;
}) {
  const { query } = useSearchParams();
  const [group] = useQueryState('group');

  const filteredItems = Object.entries(items).filter(([name, items]) => {
    const byGroup = group ? name === group : true;
    const byQuery = query
      ? items.some((item) => {
          const { title, description } = item;
          const lowerQuery = query.toLowerCase();

          return (
            title.toLowerCase().includes(lowerQuery) ||
            description.toLowerCase().includes(lowerQuery)
          );
        })
      : true;

    return byGroup && byQuery;
  });

  return (
    <>
      <FilterBar selection={Object.keys(items)} />
      {filteredItems.map(([group, items]) => (
        <section key={group}>
          <div className="flex items-center gap-2 mb-3">
            <h2 className="text-xl font-bold text-blue-500">{group}</h2>
            <span className="rounded-full bg-muted px-2 py-0.5 text-xs font-medium text-muted-foreground">
              {items.length}
            </span>
          </div>
          <Separator className="mb-4" />
          <GridCard items={items} />
        </section>
      ))}
    </>
  );
}
