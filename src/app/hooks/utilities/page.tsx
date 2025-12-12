'use client';

import { PropsWithChildren } from 'react';

import GridCard from '@/components/ListItems';
import SearchInput from '@/components/SearchInput';

import { useSearchParams } from '@/lib/utils';

import UsePreviousPage from './use-previous/page';
import UseQueryPage from './use-query/page';

const Items: Array<PropsWithChildren<CardItem>> = [
  {
    title: 'usePrevious',
    description: 'Returns the previous value of a state.',
    children: <UsePreviousPage />,
  },
  {
    title: 'useQuery',
    description: 'Manage a promise resolution which can be used to fetch data.',
    children: <UseQueryPage />,
  },
];

export default function UtilitiesPage() {
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
