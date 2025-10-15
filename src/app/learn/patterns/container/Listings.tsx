'use client';

import withLoader from '../hoc/withLoader';
import Listings from '../presentational/Listings';
import { IListing, WithLoaderProps } from '../utils/models';

function ListingsContainerComponent(
  props: WithLoaderProps<{ listings: Array<IListing> }>
) {
  // HOC
  // return <Listings listings={props.data.listings} />;
  return <Listings />;
}

export default withLoader(
  ListingsContainerComponent,
  'https://house-lydiahallie.vercel.app/api/listings'
);
