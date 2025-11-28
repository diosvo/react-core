'use client';

import { useEffect, useState } from 'react';

function emitComment(id: number) {
  setInterval(() => {
    window.dispatchEvent(
      new CustomEvent(`group-${id}`, {
        detail: 'Comment from group ' + id,
      })
    );
  }, 100000); // Decrease time for testing if needed
}

const groups = [
  {
    id: 1,
    name: 'Group 1',
  },
  {
    id: 2,
    name: 'Group 2',
  },
  {
    id: 3,
    name: 'Group 3',
  },
];

export default function FakeWebSocket() {
  const [currentId, setCurrentId] = useState<number>(1);

  useEffect(() => {
    emitComment(currentId);

    const handleEvent = (e: Event) => {
      const customEvent = e as CustomEvent<string>;
      console.log(customEvent.detail);
    };

    window.addEventListener(`group-${currentId}`, handleEvent);

    return () => {
      window.removeEventListener(`group-${currentId}`, handleEvent);
    };
  }, [currentId]);

  return (
    <div>
      <ul>
        {groups.map(({ id, name }) => (
          <li
            key={id}
            style={{
              color: currentId === id ? 'red' : 'black',
            }}
            onClick={() => setCurrentId(id)}
          >
            {name}
          </li>
        ))}
      </ul>
    </div>
  );
}
