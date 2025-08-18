'use client';

import {
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ChevronUp,
} from 'lucide-react';
import { useState } from 'react';

import { Sort, SortDirection, User } from '@/lib/models';

function sortUsers(
  users: Array<User>,
  field: string,
  direction: SortDirection
) {
  // 👀 Reason for cloning the the array
  // Immutability and React State: Directly mutate an array in state using methods like Array.prototype.sort(), React might not detect the change because the array's reference remains the same, even though its contents have been reordered.
  const usersClone = [...users];

  switch (field) {
    case 'id':
    case 'age':
      return usersClone.sort((a, b) =>
        direction === Sort.ASC ? a[field] - b[field] : b[field] - a[field]
      );
    case 'name':
    case 'occupation':
      return usersClone.sort((a, b) =>
        direction === Sort.ASC
          ? a[field].localeCompare(b[field])
          : b[field].localeCompare(a[field])
      );
    default:
      return usersClone;
  }
}

function paginateUsers(users: Array<User>, page: number, pageSize: number) {
  const start = (page - 1) * pageSize;
  const end = Math.min(start + pageSize, users.length);

  const currentData = users.slice(start, end);

  return { start, end, currentData };
}

export default function DataTable({ users }: { users: Array<User> }) {
  const [page, setPage] = useState<number>(1);
  const [pageSize, setPageSize] = useState<number>(5);

  const [sortField, setSortField] = useState<string>('id');
  const [sortDirection, setSortDirection] = useState<SortDirection>(Sort.ASC);

  const sortedUsers = sortUsers(users, sortField, sortDirection);
  const { start, end, currentData } = paginateUsers(
    sortedUsers,
    page,
    pageSize
  );

  return (
    <table className="w-full">
      <thead className="align-top">
        <tr>
          {['ID', 'Name', 'Age', 'Occupation'].map((header) => {
            const key = header.toLowerCase();
            return (
              <th
                key={key}
                className="p-2 text-start hover:cursor-pointer hover:text-blue-600"
                onClick={() => {
                  if (sortField !== key) {
                    setSortField(key);
                    setSortDirection(Sort.ASC);
                  } else {
                    // Sort in the same field
                    return sortDirection === Sort.ASC
                      ? setSortDirection(Sort.DESC)
                      : setSortDirection(Sort.ASC);
                  }
                  setPage(1);
                }}
              >
                <span className="flex items-center gap-2">
                  {header}
                  <span hidden={sortField !== key}>
                    {sortDirection === Sort.ASC ? (
                      <ChevronUp size={14} />
                    ) : (
                      <ChevronDown size={14} />
                    )}
                  </span>
                </span>
              </th>
            );
          })}
        </tr>
      </thead>
      <tbody className="border-y-1 border-b-gray-200">
        {currentData.map((user) => (
          <tr key={user.id}>
            <td className="p-2 text-start">{user.id}</td>
            <td className="p-2 text-start">{user.name}</td>
            <td className="p-2 text-start">{user.age}</td>
            <td className="p-2 text-start">{user.occupation}</td>
          </tr>
        ))}
      </tbody>
      <tfoot>
        <tr>
          <td className="gap-8 p-2" colSpan={4}>
            <div className="flex justify-end items-center gap-8">
              <div>
                <span className="text-gray-600">Rows per page:</span>
                <select
                  name="options"
                  id="page-size-select"
                  className="p-2 focus-visible:outline-none"
                  onClick={(event) => {
                    const value = Number(event.currentTarget.value);
                    if (pageSize !== value) {
                      setPageSize(value);
                      setPage(1);
                    }
                  }}
                >
                  {[5, 10, 15].map((size) => (
                    <option key={size} value={size}>
                      {size}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                {start + 1}-{end} of {users.length}
              </div>
              <button
                className="p-2 hover:bg-accent hover:cursor-pointer disabled:cursor-not-allowed disabled:bg-accent"
                onClick={() => setPage(page - 1)}
                disabled={page === 1}
              >
                <ChevronLeft size={18} />
              </button>
              <button
                className="p-2 hover:bg-accent hover:cursor-pointer disabled:cursor-not-allowed disabled:bg-accent"
                onClick={() => setPage(page + 1)}
                disabled={end >= users.length}
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </td>
        </tr>
      </tfoot>
    </table>
  );
}
