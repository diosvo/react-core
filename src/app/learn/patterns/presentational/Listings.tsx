'use client';

import LoadingSpinner from '../components/LoadingSpinner';
import Listing from './Listing';
import ListingsGrid from './ListingsGrid';

import useListings from '@/hooks/use-listings';

export default function Listings() {
  const listings = useListings();

  if (!listings) return <LoadingSpinner />;

  return (
    <ListingsGrid>
      {listings.listings.map((listing) => (
        <Listing key={listing.id} listing={listing} />
      ))}
    </ListingsGrid>
  );
}
