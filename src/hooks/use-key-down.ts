import { useEffect } from 'react';

export enum Key {
  Escape = 'Escape',
  Enter = 'Enter',
  Tab = 'Tab',
  Space = ' ',
}

export default function useKeyDown(
  key: `${Key}`,
  fn: (event: KeyboardEvent) => void
) {
  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === key) {
        fn(event);
      }
    }

    document.addEventListener('keydown', onKeyDown);

    return () => {
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [fn]);
}
