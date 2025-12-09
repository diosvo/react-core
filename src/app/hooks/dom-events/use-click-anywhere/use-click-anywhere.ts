import { useEffect } from 'react';

export default function useClickAnywhere(handler: (event: MouseEvent) => void) {
  useEffect(() => {
    document.addEventListener('click', handler);

    return () => {
      document.removeEventListener('click', handler);
    };
  }, []);
}
