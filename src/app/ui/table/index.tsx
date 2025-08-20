'use client';

import {
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ChevronUp,
} from 'lucide-react';
import { useState } from 'react';

import { Columns, Sort, SortDirection } from '@/lib/models';

function sortFn<T>(
  data: Array<T>,
  columns: Columns<T>,
  field: Nullish<string>,
  direction: SortDirection
) {
  // 👀 Reason for cloning the the array
  // Immutability and React State: Directly mutate an array in state using methods like Array.prototype.sort(), React might not detect the change because the array's reference remains the same, even though its contents have been reordered.
  const dataClone = [...data];
  const comparator = columns.find(({ key }) => field === key)?.comparator;

  if (comparator == null) return dataClone;

  return dataClone.sort((a, b) => comparator(a, b, direction));
}

function paginateFn<T>(data: Array<T>, page: number, pageSize: number) {
  const start = (page - 1) * pageSize;
  const end = Math.min(start + pageSize, data.length);

  const currentData = data.slice(start, end);

  return { start, end, currentData };
}

export default function DataTable<T extends { id: number }>({
  data,
  columns,
}: Readonly<{
  data: Array<T>;
  columns: Columns<T>;
}>) {
  const [page, setPage] = useState<number>(1);
  const [pageSize, setPageSize] = useState<number>(5);

  const [sortField, setSortField] = useState<string>('id');
  const [sortDirection, setSortDirection] = useState<SortDirection>(Sort.ASC);

  const sortedData = sortFn(data, columns, sortField, sortDirection);
  const { start, end, currentData } = paginateFn(sortedData, page, pageSize);

  return (
    <table className="w-full">
      <thead className="align-top">
        <tr>
          {columns.map(({ label, key }) => (
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
                {label}
                <span hidden={sortField !== key}>
                  {sortDirection === Sort.ASC ? (
                    <ChevronUp size={14} />
                  ) : (
                    <ChevronDown size={14} />
                  )}
                </span>
              </span>
            </th>
          ))}
        </tr>
      </thead>
      <tbody className="border-y-1 border-b-gray-200">
        {currentData.map((item) => (
          <tr key={item.id}>
            {columns.map(({ key, renderCell }) => (
              <td key={key} className="p-2 text-start">
                {renderCell(item)}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
      <tfoot>
        <tr>
          <td className="gap-8 p-2" colSpan={columns.length}>
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
                {start + 1}-{end} of {data.length}
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
                disabled={end >= data.length}
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
