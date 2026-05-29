'use client';

import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { Plus, Trash2 } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

import DataTable from '@/app/ui/table';
import { Columns, User } from '@/lib/models';

import store, { RootState } from '../setup/store';
import { addUser, deleteUser, loadUsers, updateUser } from '../setup/users';

function EditableNameCell({ user }: { user: User }) {
  const [isEditing, setIsEditing] = useState(false);
  const [value, setValue] = useState(user.name);

  const handleSave = () => {
    setIsEditing(false);
    store.dispatch(updateUser(user.id, value));
  };

  return (
    <Input
      value={value}
      readOnly={!isEditing}
      onClick={() => setIsEditing(true)}
      onChange={(e) => setValue(e.target.value)}
      onBlur={handleSave}
      onKeyDown={(e) => {
        if (e.key === 'Enter') e.currentTarget.blur();
        if (e.key === 'Escape') {
          setValue(user.name);
          setIsEditing(false);
        }
      }}
      className="w-full border-0 bg-transparent p-0 text-sm font-medium focus:ring-0"
    />
  );
}

const userColumns: Columns<User> = [
  {
    label: 'ID',
    key: 'id',
  },
  {
    label: 'Name',
    key: 'name',
    renderCell: (user) => <EditableNameCell user={user} />,
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
