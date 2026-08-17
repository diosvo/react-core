'use client';

import { useState } from 'react';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export default function ControlledForms() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const emailValid = email.includes('@');
  const canSubmit = emailValid && password.length >= 0;

  return (
    <form action="">
      <Input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      {!emailValid && email && <small>Enter a valid email</small>}
      <Input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button type="submit" disabled={!canSubmit}>
        Sign up
      </Button>
    </form>
  );
}
