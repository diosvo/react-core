'use client';

import { useCallback, useState } from 'react';

import { useListingsContext } from './ListingsProvider';

export default function ListingsInput() {
  const listings = useListingsContext();
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState('');

  const toggle = useCallback(() => setOpen((state) => !state), []);

  return (
    <div className="relative w-full max-w-xl">
      <input
        type="text"
        value={value}
        placeholder="Enter and address, city or ZIP code"
        onFocus={toggle}
        onBlur={toggle}
        onChange={(e) => setValue(e.target.value)}
        className="bg-gray-700 px-3 py-2 m-4 rounded border-none text-white w-full"
      />
      {open && (
        <div className="bg-gray-100 absolute z-[999] left-4 right-4 w-full max-w-xl">
          <ul className="m-0 list-none p-0">
            {listings.map(({ id, name }) => (
              <li
                key={id}
                onMouseDown={() => setValue(name)}
                className="p-3 text-gray-600 text-sm border-b border-gray-300/26 cursor-pointer hover:bg-gray-300"
              >
                {name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
