'use client';

import { useEffect, useState } from 'react';

import { IListing } from '@/app/learn/patterns/utils/models';

export default function useListings() {
  const [listings, setListings] = useState<{ listings: Array<IListing> }>();

  useEffect(() => {
    fetch('https://house-lydiahallie.vercel.app/api/listings')
      .then((res) => res.json())
      .then((res) => setListings(res));
  }, []);

  return listings;
}
