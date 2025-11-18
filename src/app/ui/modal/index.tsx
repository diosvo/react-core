import { PropsWithChildren } from 'react';
import { createPortal } from 'react-dom';

import { Button } from '@/components/ui/button';

type ModelProps = {
  open: boolean;
  title: string;
  onClose: () => void;
};

export default function ModalDialog({
  open,
  title,
  children,
  onClose,
}: PropsWithChildren<ModelProps>) {
  if (!open) return null;

  return createPortal(
    <div
      id="overlay"
      className="fixed inset-0 flex items-center justify-center p-4 bg-black/50"
    >
      <div
        id="modal-dialog"
        className="flex flex-col items-center justify-between p-4 bg-white border border-gray-200 rounded-lg max-w-md"
      >
        <h2 className="text-xl font-bold">{title}</h2>
        <div className="my-2">{children}</div>
        <div>
          <Button onClick={onClose}>Close</Button>
        </div>
      </div>
    </div>,
    document.body
  );
}
