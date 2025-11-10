'use client';

import { FormEvent } from 'react';

import { toast } from 'sonner';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

const SUBMIT_URL =
  'https://questions.greatfrontend.com/api/questions/contact-form';

const Field = ({ name }: { name: string }) => {
  const label = name.charAt(0).toUpperCase() + name.slice(1);

  return (
    <div className="grid w-full mb-3">
      <Label htmlFor={name} className="mb-2">
        {label}
      </Label>
      <Input id={name} name={name} />
    </div>
  );
};

export default function ContactForm() {
  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;

    if (form.action !== SUBMIT_URL) {
      toast.error('Incorrect form action value');
      return;
    }

    if (form.method.toLowerCase() !== 'post') {
      toast.error('Incorrect form method value');
      return;
    }

    const formData = new FormData(form);

    try {
      const response = await fetch(SUBMIT_URL, {
        method: form.method,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.get('name'),
          email: formData.get('email'),
          message: formData.get('message'),
        }),
      });
      const text = await response.text();
      toast(text);
    } catch {
      toast.error('Error submitting form!');
    }
  }

  return (
    <form method="POST" action={SUBMIT_URL} onSubmit={handleSubmit}>
      {['name', 'email', 'message'].map((name) => (
        <Field key={name} name={name} />
      ))}
      <Button type="submit" className="w-full">
        Send
      </Button>
    </form>
  );
}
