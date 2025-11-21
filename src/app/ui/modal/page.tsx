'use client';

import { useState } from 'react';

import UiLayout from '@/components/ui-layout';
import { Button } from '@/components/ui/button';

import ModalDialog from '.';

export default function ModalPage() {
  const [open, setOpen] = useState(false);

  return (
    <UiLayout
      title={
        <a
          href="https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Modal Dialog
        </a>
      }
      definition={
        <ul>
          <li>
            · Overlaid on either the primary window or another dialog window
          </li>
          <li>
            · Users cannot interact with content outside an active dialog window
          </li>
        </ul>
      }
      description={
        <ul>
          <li>1. Accessibility: ARIA roles, states, and properties</li>
          <li>2. Keyboard Interactions</li>
        </ul>
      }
    >
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
    </UiLayout>
  );
}
