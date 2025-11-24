import { useEffect } from 'react';

export enum Key {
  Escape = 'Escape',
  Enter = 'Enter',
  Space = ' ',
}

export default function useKeyDown(key: `${Key}`, fn: () => void) {
  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === key) {
        fn();
      }
    }

    document.addEventListener('keydown', onKeyDown);

    return () => {
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [fn]);
}
