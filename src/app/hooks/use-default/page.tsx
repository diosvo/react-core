'use client';

import { RefreshCcw } from 'lucide-react';

import HookLayout from '@/components/hook-layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

import useDefault from './use-default';

export default function useDefaultPage() {
  const initialUser = { name: 'Dios' };
  const defaultUser = { name: 'Dios Vo' };
  const [user, setUser] = useDefault(defaultUser, initialUser);

  return (
    <HookLayout
      title="useDefault"
      description={
        <>Return the default value when state is null or undefined.</>
      }
    >
      <div className="flex w-full max-w-sm gap-2 items-end">
        <div className="grid w-full max-w-sm items-center gap-3">
          <Label htmlFor="name">Name</Label>
          <Input
            value={user.name}
            id="name"
            type="text"
            placeholder="Name"
            onChange={(e) => setUser({ name: e.target.value })}
          />
        </div>
        <Button onClick={() => setUser(null)}>
          <RefreshCcw />
          Reset
        </Button>
      </div>
    </HookLayout>
  );
}
