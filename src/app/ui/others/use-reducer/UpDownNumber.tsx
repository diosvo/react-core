'use client';

import { useReducer } from 'react';

import { Button } from '@/components/ui/button';

// 1. Initial state
const initialState = 0;

// 2. Actions
const UP_ACTION = 'up';
const DOWN_ACTION = 'down';

// 3. Reducer function
function reducer(state: number, action: string) {
  switch (action) {
    case UP_ACTION:
      return state + 1;
    case DOWN_ACTION:
      return state - 1;

    default:
      throw new Error('Invalid action');
  }
}

// 4. Dispatch

export default function UpDownNumber() {
  const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <p className="text-red-500 mb-2">{count}</p>
      <Button onClick={() => dispatch(UP_ACTION)}>Up</Button>
      <Button
        variant="secondary"
        className="ml-2"
        onClick={() => dispatch(DOWN_ACTION)}
      >
        Down
      </Button>
    </div>
  );
}
