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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    if (value.trim().length > 0) {
      setQuery(value);
      return;
    }

    setQuery(null);
  };

  return (
    <InputGroup>
      <InputGroupInput
        value={query}
        placeholder="State"
        className="pl-1!"
        onChange={handleChange}
      />
      <InputGroupAddon>
        <InputGroupText>use</InputGroupText>
      </InputGroupAddon>
      <InputGroupAddon align="inline-end">
        {query.length > 0 ? <X onClick={() => setQuery(null)} /> : <Search />}
      </InputGroupAddon>
    </InputGroup>
  );
}
