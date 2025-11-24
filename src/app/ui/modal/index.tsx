import { ComponentProps, PropsWithChildren, useId, useRef } from 'react';
import { createPortal } from 'react-dom';

import useClickOutside from '@/app/hooks/use-click-outside/use-click-outside';
import useKeyDown, { Key } from '@/hooks/use-key-down';

import { Button } from '@/components/ui/button';

type ModelProps = {
  open: boolean;
  title: string;
  onClose: () => void;
};

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

  useKeyDown(Key.Escape, onClose);
  useClickOutside(dialogRef, onClose);

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
    document.body
  );
}
