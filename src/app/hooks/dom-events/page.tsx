'use client';

import { PropsWithChildren } from 'react';

import GridCard from '@/components/ListItems';
import { useSearchParams } from '@/lib/utils';

import UseClickAnywherePage from './use-click-anywhere/page';
import UseClickOutsidePage from './use-click-outside/page';
import UseFocusPage from './use-focus/page';
import UseHoverPage from './use-hover/page';
import UseWindowSizePage from './use-window-size/page';

const Items: Array<PropsWithChildren<CardItem>> = [
  {
    title: 'useFocus',
    description: 'Enable programmatic focusing of an element.',
    children: <UseFocusPage />,
  },
  {
    title: 'useClickOutside',
    description: 'Detect clicks outside of a specified element.',
    children: <UseClickOutsidePage />,
  },
  {
    title: 'useClickAnywhere',
    description: 'Handle click events anywhere on the document.',
    children: <UseClickAnywherePage />,
  },
  {
    title: 'useHoverPage',
    description: 'Tracks whether an element is being hovered.',
    children: <UseHoverPage />,
  },
  {
    title: 'useWindowSize',
    description: 'The current height and width of the window.',
    children: <UseWindowSizePage />,
  },
];

export default function DOMEventsPage() {
  const { query } = useSearchParams();

  const filteredItems = Items.filter(({ title }) =>
    title.toLowerCase().includes(query.toLowerCase()),
  );

  return <GridCard items={filteredItems} />;
}
