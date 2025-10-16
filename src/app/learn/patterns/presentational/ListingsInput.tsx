'use client';

import { FlyOut } from '../components/FlyOut';
import { useListingsContext } from './ListingsProvider';

export default function ListingsInput() {
  const listings = useListingsContext();

  return (
    <FlyOut>
      <FlyOut.Input />
      <FlyOut.List>
        {listings.map(({ id, name }) => (
          <FlyOut.Item key={id} value={name}>
            {name}
          </FlyOut.Item>
        ))}
      </FlyOut.List>
    </FlyOut>
  );
}
