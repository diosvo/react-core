import { Ref, useCallback, useRef } from 'react';

export default function useFocus<T extends HTMLInputElement>(): [
  Ref<HTMLInputElement> | undefined,
  () => void
] {
  const ref = useRef<T>(null);

  const focusElement = useCallback(() => {
    // Ensure it is focused in the next DOM repaint
    requestAnimationFrame(() => {
      ref.current?.focus();
    });
  }, []);

  return [ref, focusElement];
}
