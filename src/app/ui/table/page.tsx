'use client';

import UiLayout from '@/components/ui-layout';
import { HOUSES, USERS } from '@/lib/data';
import { Columns, House, Sort, SortDirection, User } from '@/lib/models';

import { HouseWifi, Users } from 'lucide-react';
import DataTable from '.';

const userColumns: Columns<User> = [
  {
    label: 'ID',
    key: 'id',
    renderCell: (user: User) => user.id,
    comparator: (a: User, b: User, direction: SortDirection) =>
      direction === Sort.ASC ? a.id - b.id : b.id - a.id,
  },
  {
    label: 'Name',
    key: 'name',
    renderCell: (user: User) => user.name,
    comparator: (a: User, b: User, direction: SortDirection) =>
      direction === Sort.ASC
        ? a.name.localeCompare(b.name)
        : b.name.localeCompare(a.name),
  },
  {
    label: 'Age',
    key: 'age',
    renderCell: (user: User) => user.age,
    comparator: (a: User, b: User, direction: SortDirection) =>
      direction === Sort.ASC ? a.age - b.age : b.age - a.age,
  },
  {
    label: 'Occupation',
    key: 'occupation',
    renderCell: (user: User) => user.occupation,
    comparator: (a: User, b: User, direction: SortDirection) =>
      direction === Sort.ASC
        ? a.occupation.localeCompare(b.occupation)
        : b.occupation.localeCompare(a.occupation),
  },
];

const houseColumns: Columns<House> = [
  {
    label: 'ID',
    key: 'id',
    renderCell: (house: House) => house.id,
    comparator: (a: House, b: House, direction: SortDirection) =>
      direction === 'asc' ? a.id - b.id : b.id - a.id,
  },
  {
    label: 'Street',
    key: 'street',
    renderCell: (house: House) => house.street,
    comparator: (a: House, b: House, direction: SortDirection) =>
      direction === 'asc'
        ? a.street.localeCompare(b.street)
        : b.street.localeCompare(a.street),
  },
  {
    label: 'City',
    key: 'city',
    renderCell: (house: House) => house.city,
    comparator: (a: House, b: House, direction: SortDirection) =>
      direction === 'asc'
        ? a.city.localeCompare(b.city)
        : b.city.localeCompare(a.city),
  },
  {
    label: 'State',
    key: 'state',
    renderCell: (house: House) => house.state,
    comparator: (a: House, b: House, direction: SortDirection) =>
      direction === 'asc'
        ? a.state.localeCompare(b.state)
        : b.state.localeCompare(a.state),
  },
  {
    label: 'Built Year',
    key: 'built_year',
    renderCell: (house: House) => house.built_year,
    comparator: (a: House, b: House, direction: SortDirection) =>
      direction === 'asc'
        ? a.built_year - b.built_year
        : b.built_year - a.built_year,
  },
];

export default function TablePage() {
  return (
    <UiLayout
      title="Data Table"
      description={
        <ul>
          <li>· Pagination</li>
          <li>· Sorting</li>
          <li>· Generic Table</li>
        </ul>
      }
      implementation={
        <ul>
          <li>
            · Define <code>columns</code> configuration
          </li>
          <li>· Sorting - Use column&apos;s comparator function</li>
          <li>
            · <code>renderCell()</code> - determines how to render the cell data
            for that column
          </li>
        </ul>
      }
    >
      <h1 className="flex gap-2 text-xl font-bold mb-4">
        <Users />
        Users
      </h1>
      <DataTable data={USERS} columns={userColumns} />
      <h1 className="flex gap-2 text-xl font-bold mb-4">
        <HouseWifi />
        Houses
      </h1>
      <DataTable data={HOUSES} columns={houseColumns} />
    </UiLayout>
  );
}
