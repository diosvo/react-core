'use client';

import { BrushCleaning, Plus } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { ButtonGroup } from '@/components/ui/button-group';

import useMap from './use-map';

export default function UseMapPage() {
  const { map, set, setAll, clear, remove } = useMap([['key', '🆕']]);

  return (
    <>
      <ButtonGroup className="mb-2">
        <Button onClick={() => set(String(Date.now()), '📦')}>
          <Plus />
        </Button>
        <Button
          variant="secondary"
          onClick={() =>
            setAll([
              ['hello', '👋'],
              ['data', '📦'],
            ])
          }
        >
          Set new data
        </Button>
        <Button variant="destructive" onClick={clear}>
          <BrushCleaning />
        </Button>
      </ButtonGroup>
      {Array.from(map.entries()).map(([key, value], index) => (
        <button
          key={key}
          className="block hover:line-through hover:text-red-500 hover:cursor-pointer"
          onClick={() => remove(key)}
        >
          &middot; {key}: {value}
        </button>
      ))}
    </>
  );
}
