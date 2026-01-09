import { useLayoutEffect, useState } from 'react';

interface WindowSize {
  height: number;
  width: number;
}

export default function useWindowSize(): WindowSize {
  const [size, setSize] = useState<WindowSize>({
    width: 0,
    height: 0,
  });

  // Updated synchronously after the browser has painted.
  useLayoutEffect(() => {
    const resize = () =>
      setSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });

    window.addEventListener('resize', resize);

    return () => {
      window.removeEventListener('resize', resize);
    };
  }, []);

  return size;
}
