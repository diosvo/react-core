import {
  ComponentProps,
  PropsWithChildren,
  RefObject,
  useEffect,
  useId,
  useRef,
} from 'react';
import { createPortal } from 'react-dom';

import useClickOutside from '@/app/hooks/dom-events/use-click-outside/use-click-outside';
import useKeyDown, { Key } from '@/hooks/use-key-down';

import { Button } from '@/components/ui/button';

type ModelProps = {
  open: boolean;
  title: string;
  onClose: () => void;
};

function getTabbableElements(elRef: RefObject<HTMLDivElement>) {
  if (elRef.current == null) return [];

  return elRef.current.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
  );
}

/**
 * Focus on the first tabbable element on mount.
 */
function useFocusOnFirstTabbableElement(elRef: RefObject<HTMLDivElement>) {
  useEffect(() => {
    const tabbableElements = getTabbableElements(elRef);
    const firstElement = tabbableElements[0];
    if (firstElement instanceof HTMLElement) {
      firstElement.focus();
    }
  }, []);
}

/**
 * Trap focus within an element.
 */
function useFocusTrap(elRef: RefObject<HTMLDivElement>) {
  function trapFocus(event: KeyboardEvent) {
    if (elRef.current == null) {
      return;
    }

    const tabbableElements = getTabbableElements(elRef);
    const firstElement = tabbableElements[0];
    const lastElement = tabbableElements[tabbableElements.length - 1];

    if (event.shiftKey) {
      // Shift + Tab event
      if (
        document.activeElement === firstElement &&
        lastElement instanceof HTMLElement
      ) {
        event.preventDefault();
        lastElement.focus();
      }
    } else {
      // Tab event
      if (
        document.activeElement === lastElement &&
        firstElement instanceof HTMLElement
      ) {
        event.preventDefault();
        firstElement.focus();
      }
    }
  }

  useKeyDown(Key.Tab, trapFocus);
}

/**
 * Retain reference to trigger element and focus that element when closed.
 */
function useReturnFocusToTrigger() {
  const triggerElRef = useRef<Nullable<Element>>(null);

  useEffect(() => {
    // Save a reference to the focused element when mounted.
    triggerElRef.current = document.activeElement;

    return () => {
      if (triggerElRef.current instanceof HTMLElement) {
        // Focuses on element when unmounted.
        triggerElRef.current.focus();
      }
    };
  }, []);
}

export default function ModalDialog({
  open = false,
  ...props
}: Readonly<{ open: boolean }> & ComponentProps<typeof ModalDialogImpl>) {
  if (!open) return null;

  return <ModalDialogImpl open={open} {...props} />;
}

export function ModalDialogImpl({
  title,
  children,
  onClose,
}: PropsWithChildren<ModelProps>) {
  // Since hooks cannot be called conditionally and there's no need to call the useId hook when the modal dialog is not open
  // => The component can be split into two with the bulk of the component within ModalDialogImpl so that the useId hooks are not called unnecessarily.
  const titleId = useId();
  const contentId = useId();
  const dialogRef = useRef<HTMLDivElement>(null);

  // Closing-related hooks.
  useKeyDown(Key.Escape, onClose);
  useClickOutside(dialogRef, onClose);

  // Focus-related hooks.
  useReturnFocusToTrigger(); // Has to be called before useFocusOnFirstTabbableElement otherwise the focus is lost.
  useFocusOnFirstTabbableElement(dialogRef as RefObject<HTMLDivElement>);
  useFocusTrap(dialogRef as RefObject<HTMLDivElement>);

  return createPortal(
    <div
      id="overlay"
      className="fixed inset-0 flex items-center justify-center p-4 bg-black/50"
    >
      <div
        ref={dialogRef}
        id="modal-dialog"
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        aria-describedby={contentId}
        className="flex flex-col items-center justify-between p-4 bg-white border border-gray-200 rounded-lg max-w-md"
      >
        <h2 id={titleId} className="text-xl font-bold">
          {title}
        </h2>
        <div id={contentId} className="my-2">
          {children}
        </div>
        <div>
          <Button onClick={onClose}>Close</Button>
        </div>
      </div>
    </div>,
    document.body,
  );
}
