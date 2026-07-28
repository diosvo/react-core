'use client';

import { type ComponentPropsWithoutRef } from 'react';

function Button({
  variant = 'default',
  label,
  ...props
}: {
  variant?: 'default' | 'danger';
  label: string;
} & ComponentPropsWithoutRef<'button'>) {
  return (
    <button
      className={`${variant === 'danger' ? 'text-red-500' : ''} ${props.disabled ? 'bg-yellow-100' : ''}`}
      {...props}
    >
      {label}
    </button>
  );
}

export default function PassingDataDown() {
  return (
    <div className="flex gap-2">
      <Button label="Add to cart" onClick={console.log} />
      <Button label="Remove" variant="danger" onClick={console.log} />
      <Button label="Checkout" disabled={true} />
    </div>
  );
}
