'use client';

import { Search, X } from 'lucide-react';

import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
  InputGroupText,
} from '@/components/ui/input-group';
import { useSearchParams } from '@/lib/utils';

export default function SearchInput() {
  const { query, setQuery } = useSearchParams();

  return (
    <InputGroup>
      <InputGroupInput
        value={query}
        placeholder="State"
        className="pl-1!"
        onChange={(e) => setQuery(e.target.value)}
      />
      <InputGroupAddon>
        <InputGroupText>use</InputGroupText>
      </InputGroupAddon>
      <InputGroupAddon align="inline-end">
        {query.trim().length > 0 ? (
          <X onClick={() => setQuery(null)} />
        ) : (
          <Search />
        )}
      </InputGroupAddon>
    </InputGroup>
  );
}
