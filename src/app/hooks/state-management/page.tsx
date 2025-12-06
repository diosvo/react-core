'use client';

import { PropsWithChildren } from 'react';

import UseCounterPage from './use-counter/page';
import UseCyclePage from './use-cycle/page';
import UseStateWithResetPage from './use-state-with-reset/page';
import UseTogglePage from './use-toggle/page';

import GridCard from '@/components/ListItems';
import SearchInput from '@/components/SearchInput';

import { useSearchParams } from '@/lib/utils';

const Items: Array<PropsWithChildren<CardItem>> = [
  {
    title: 'useCounter',
    description: 'Manages counter state with useCallback',
    children: <UseCounterPage />,
  },
  {
    title: 'useCycle',
    description: 'Increment the index by 1 modulo the length.',
    children: <UseCyclePage />,
  },
  {
    title: 'useStateWithReset',
    description: 'Reset the state to its initial value.',
    children: <UseStateWithResetPage />,
  },
  {
    title: 'useToggle',
    description: 'Manage a boolean toggle state.',
    children: <UseTogglePage />,
  },
];

export default function StateManagementPage() {
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
