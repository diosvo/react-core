'use client';

import { useEffect } from 'react';
import { useSelector } from 'react-redux';

import { Trash2 } from 'lucide-react';

import DataTable from '@/app/ui/table';
import { Button } from '@/components/ui/button';
import { Columns, User } from '@/lib/models';

import store, { RootState } from '../setup/store';
import { loadUsers } from '../setup/users';

const userColumns: Columns<User> = [
  {
    label: 'ID',
    key: 'id',
  },
  {
    label: 'Name',
    key: 'name',
  },
];

export default function UsersSlice() {
  useEffect(() => {
    store.dispatch(loadUsers());
    console.log('UsersSlice mounted, dispatching loadUsers');
  }, []);

  const { list, loading } = useSelector(
    (state: RootState) => state.entities.users,
  );

  return (
    <DataTable
      data={list}
      columns={userColumns}
      loading={loading}
      renderActions={(user: User) => (
        <>
          <Button size="icon" variant="destructive">
            <Trash2 />
          </Button>
        </>
      )}
    />
  );
}
