'use client';

import { useSelector } from 'react-redux';

import DataTable from '@/app/ui/table';
import { Columns, User } from '@/lib/models';
import { useEffect } from 'react';
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

  const { list } = useSelector((state: RootState) => state.entities.users);

  return <DataTable data={list} columns={userColumns} />;
}
