'use client';

import { useEffect } from 'react';
import { useSelector } from 'react-redux';

import { Plus, Trash2 } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

import DataTable from '@/app/ui/table';
import { Columns, User } from '@/lib/models';

import store, { RootState } from '../setup/store';
import { addUser, deleteUser, loadUsers } from '../setup/users';

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

  const handleSubmit = (formData: FormData) => {
    const name = formData.get('name') as string;
    store.dispatch(addUser(name));
  };

  return (
    <>
      <div className="w-full max-w-md">
        <form className="flex gap-2" action={handleSubmit}>
          <Input name="name" placeholder="Name" required />
          <Button type="submit">
            <Plus />
            Add
          </Button>
        </form>
      </div>

      <DataTable
        data={list}
        columns={userColumns}
        loading={loading}
        renderActions={(user: User) => (
          <>
            <Button
              size="icon"
              variant="destructive"
              onClick={() => store.dispatch(deleteUser(user.id))}
            >
              <Trash2 />
            </Button>
          </>
        )}
      />
    </>
  );
}
