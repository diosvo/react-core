'use client';

import { PropsWithChildren, Suspense } from 'react';

import GridCard from '@/components/ListItems';
import SearchInput from '@/components/SearchInput';

import { useSearchParams } from '@/lib/utils';

import TicTacToe from './components/Tic-Tac-Toe';

const Items: Array<PropsWithChildren<CardItem>> = [
  {
    title: 'Tic Tac Toe',
    description: 'https://react.dev/learn/tutorial-tic-tac-toe',
    children: <TicTacToe />,
  },
];

function ReactDevContent() {
  const { query } = useSearchParams();

  const filteredItems = Items.filter(({ title }) =>
    title.toLowerCase().includes(query.toLowerCase()),
  );

  return (
    <div className="flex flex-col gap-4 max-w-7xl mx-auto w-full p-4">
      <SearchInput />
      <GridCard items={filteredItems} />
    </div>
  );
}

export default function ReactDevPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ReactDevContent />
    </Suspense>
  );
}
