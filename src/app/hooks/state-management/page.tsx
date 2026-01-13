'use client';

import { PropsWithChildren } from 'react';

import GridCard from '@/components/ListItems';
import { useSearchParams } from '@/lib/utils';

import UseCounterPage from './use-counter/page';
import UseCyclePage from './use-cycle/page';
import UseSetPage from './use-set/page';
import UseStateWithResetPage from './use-state-with-reset/page';
import UseTogglePage from './use-toggle/page';

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
  {
    title: 'useSet',
    description: 'Manage a Set with utility functions.',
    children: <UseSetPage />,
  },
];

export default function StateManagementPage() {
  const { query } = useSearchParams();

  const filteredItems = Items.filter(({ title }) =>
    title.toLowerCase().includes(query.toLowerCase()),
  );

  return <GridCard items={filteredItems} />;
}
