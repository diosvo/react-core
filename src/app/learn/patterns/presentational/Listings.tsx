'use client';

import Listing from './Listing';
import ListingsGrid from './ListingsGrid';

import { IListing } from '../utils/models';

export default function Listings({ listings }: { listings: Array<IListing> }) {
  return (
    <ListingsGrid>
      {listings.map((listing) => (
        <Listing key={listing.id} listing={listing} />
      ))}
    </ListingsGrid>
  );
}
