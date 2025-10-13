import { PropsWithChildren } from 'react';

export default function ListingsGrid({ children }: PropsWithChildren) {
  return (
    <div className="flex flex-wrap items-center justify-center">{children}</div>
  );
}
