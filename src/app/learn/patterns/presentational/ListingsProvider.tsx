'use client';

import { PropsWithChildren } from 'react';

import { createContext } from '@/components/create-context';
import useListings from '@/hooks/use-listings';

import LoadingSpinner from '../components/LoadingSpinner';
import { IListing } from '../utils/models';

const [useContext, Provider] = createContext<Array<IListing>>();

export function ListingsProvider(props: PropsWithChildren) {
  const listings = useListings();

  if (!listings) return <LoadingSpinner />;

  return <Provider value={listings.listings}>{props.children}</Provider>;
}

export const useListingsContext = useContext;
