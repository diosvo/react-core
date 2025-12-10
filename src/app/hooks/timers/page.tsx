'use client';

import { PropsWithChildren } from 'react';

import GridCard from '@/components/ListItems';
import SearchInput from '@/components/SearchInput';

import { useSearchParams } from '@/lib/utils';

import UseTimeoutPage from './use-timeout/page';

const Items: Array<PropsWithChildren<CardItem>> = [
  {
    title: 'useCounter',
    description: 'Invoke a callback function after a specified delay.',
    children: <UseTimeoutPage />,
  },
];

export default function TimersPage() {
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
