import Image from 'next/image';

import { IListing } from '../utils/models';

export default function Listing({ listing }: { listing: IListing }) {
  return (
    <div className="bg-gray-900 p-4 rounded-md text-white flex flex-col shadow-lg w-[300px] h-full">
      <Image alt={listing.name} src={listing.image} width={300} height={200} />
      <>
        <h3 className="my-3 font-bold">{listing.name}</h3>
        <span className="text-slate-400 text-sm">
          {listing.city},{listing.state}
        </span>
        <h3 className="text-pink-400 font-bold my-2">
          ${new Intl.NumberFormat('en-US').format(listing.price)}
        </h3>
        <span className="text-slate-400 text-sm">
          {listing.floors} floor, {listing.rooms} rooms, {listing.sqft}ft
        </span>
      </>
    </div>
  );
}
