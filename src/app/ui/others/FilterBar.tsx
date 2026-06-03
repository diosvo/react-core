'use client';

import { parseAsString, useQueryState } from 'nuqs';

import SearchInput from '@/components/SearchInput';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

export default function FilterBar({ selection }: { selection: Array<string> }) {
  const [group, setGroup] = useQueryState(
    'group',
    parseAsString.withDefault(''),
  );

  return (
    <div className="flex items-center gap-3">
      <SearchInput />
      <Select value={group} onValueChange={(value) => setGroup(value)}>
        <SelectTrigger className="w-[250px]">
          <SelectValue placeholder="Group" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            {selection.map((item) => (
              <SelectItem key={item} value={item}>
                {item}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
      <Button
        variant="destructive"
        disabled={!group}
        onClick={() => setGroup('')}
      >
        All group
      </Button>
    </div>
  );
}
