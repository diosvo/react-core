'use client';

import { useState } from 'react';

import UiLayout from '@/components/ui-layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

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
          <li>2. Keyboard Interactions: Close, Focus</li>
        </ul>
      }
    >
      <Button onClick={() => setOpen(true)}>Open Dialog</Button>
      <ModalDialog
        open={open}
        onClose={() => setOpen(false)}
        title="Modal Dialog"
      >
        <div className="flex flex-col gap-4">
          <div>
            Provide your feedback, we will get back in 3-5 business days.
          </div>
          <Input id="email" placeholder="vtmn1212@gmail.com" />
          <Textarea id="message" placeholder="Your message here" rows={5} />
          <Button type="button">Submit</Button>
        </div>
      </ModalDialog>
    </UiLayout>
  );
}
