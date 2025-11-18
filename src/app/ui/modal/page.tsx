'use client';

import { useState } from 'react';

import { Button } from '@/components/ui/button';
import ModalDialog from '.';

export default function ModalPage() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setOpen(true)}>Open Dialog</Button>
      <ModalDialog
        open={open}
        onClose={() => setOpen(false)}
        title="Modal Dialog"
      >
        One morning, when Gregor Samsa woke from troubled dreams, he found
        himself transformed in his bed into a horrible vermin. He lay on his
        armour-like back, and if he lifted his head a little he could see his
        brown belly, slightly domed and divided by arches into stiff sections.
      </ModalDialog>
    </>
  );
}
