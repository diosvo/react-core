'use client';

import { PropsWithChildren } from 'react';

import GridCard from '@/components/ListItems';
import SearchInput from '@/components/SearchInput';

import { useSearchParams } from '@/lib/utils';

import UseEffectOncePage from './use-effect-once/page';

const Items: Array<PropsWithChildren<CardItem>> = [
  {
    title: 'useEffectOnce',
    description:
      'Run an effect only once on mount, regardless of re-renders with.',
    children: <UseEffectOncePage />,
  },
];

export default function EffectsPage() {
  const { query } = useSearchParams();

  const filteredItems = Items.filter(({ title }) =>
    title.toLowerCase().includes(query.toLowerCase()),
  );

  return (
    <>
      <SearchInput />
      <GridCard items={filteredItems} />
    </>
  );
}
