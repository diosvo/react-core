'use client';

import { BrushCleaning, Plus, Recycle } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { ButtonGroup } from '@/components/ui/button-group';

import useSet from './use-set';

export default function UseSetPage() {
  const { set, add, remove, reset, clear } = useSet(new Set(['hi']));

  return (
    <>
      <ButtonGroup>
        <Button onClick={() => add(Date.now().toString())}>
          <Plus />
        </Button>
        <Button variant="secondary" onClick={() => reset()}>
          <Recycle />
        </Button>
        <Button variant="destructive" onClick={() => clear()}>
          <BrushCleaning />
        </Button>
      </ButtonGroup>
      <ul className="p-2">
        {Array.from(set).map((item, index) => (
          <li key={index}>
            <span>{index + 1}. </span>
            <button
              className="hover:line-through hover:text-red-500 hover:cursor-pointer"
              onClick={() => remove(item)}
            >
              {item}
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}
