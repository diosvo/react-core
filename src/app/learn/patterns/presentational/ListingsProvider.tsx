'use client';

import { createContext, PropsWithChildren, useContext } from 'react';

import useListings from '@/hooks/use-listings';
import LoadingSpinner from '../components/LoadingSpinner';
import { IListing } from '../utils/models';

const ListingsContext = createContext<Array<IListing>>([]);

export function ListingsProvider(props: PropsWithChildren) {
  const listings = useListings();

  if (!listings) return <LoadingSpinner />;

  return (
    <ListingsContext value={listings.listings}>
      {props.children}
    </ListingsContext>
  );
}

export function useListingsContext() {
  return useContext(ListingsContext);
}
