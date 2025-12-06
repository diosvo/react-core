import { clsx, type ClassValue } from 'clsx';
import { parseAsString, useQueryState } from 'nuqs';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function useSearchParams() {
  const [query, setQuery] = useQueryState(
    'query',
    parseAsString.withDefault(''),
  );

  return {
    query,
    setQuery,
  };
}
