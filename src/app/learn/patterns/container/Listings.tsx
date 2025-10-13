'use client';

import { useEffect, useState } from 'react';

import Listings from '../presentational/Listings';
import { IListing } from '../utils/models';

export default function ListingsContainerComponent() {
  const [data, setData] = useState<{ listings: Array<IListing> }>({
    listings: [],
  });

  useEffect(() => {
    fetch('https://house-lydiahallie.vercel.app/api/listings')
      .then((res) => res.json())
      .then((res) => setData(res));
  }, []);

  if (!data) return null;

  return <Listings listings={data.listings} />;
}
