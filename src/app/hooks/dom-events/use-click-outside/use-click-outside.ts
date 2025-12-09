import { RefObject, useEffect, useRef } from 'react';

type HandlerType = MouseEvent | TouchEvent | FocusEvent;

export default function useClickOutside<T extends HTMLElement>(
  ref: RefObject<Nullable<T>>,
  handler: (event: HandlerType) => void,
  eventListenerOptions?: boolean | AddEventListenerOptions
) {
  const latestHanlder = useRef(handler);
  latestHanlder.current = handler;

  useEffect(() => {
    const listener = (event: HandlerType) => {
      const target = event.target as Node;
      if (!ref.current || !target.isConnected) return;

      const outside = ref.current && !ref.current.contains(target);
      if (!outside) return;

      latestHanlder.current(event);
    };

    window.addEventListener('mousedown', listener, eventListenerOptions);
    window.addEventListener('touchstart', listener, eventListenerOptions);

    return () => {
      window.removeEventListener('mousedown', listener, eventListenerOptions);
      window.removeEventListener('touchstart', listener, eventListenerOptions);
    };
  }, [ref, eventListenerOptions]);
}
