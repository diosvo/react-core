'use client';

import { FormEvent, useState } from 'react';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

function Table({ rows, columns }: { rows: number; columns: number }) {
  return (
    <table className="border-collapse">
      <tbody>
        {Array.from({ length: rows }).map((_, row) => (
          <tr key={row}>
            {Array.from({ length: columns }).map((_, column) => (
              <td
                key={column}
                className="p-2 text-center border border-indigo-500"
              >
                {column % 2 === 0
                  ? rows * column + (row + 1)
                  : rows * (column + 1) - row}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default function GenerateTable() {
  const [rows, setRows] = useState<number>(0);
  const [columns, setColumns] = useState<number>(0);

  function submitAction(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const r = formData.get('rows');
    const c = formData.get('columns');

    setRows(Number(r));
    setColumns(Number(c));
  }

  return (
    <div className="grid gap-6 lg:grid-cols-2">
      <form onSubmit={submitAction} className="flex flex-col gap-3">
        <Label htmlFor="rows">Rows</Label>
        <Input
          id="rows"
          name="rows"
          type="number"
          min={0}
          max={10}
          defaultValue={rows}
        />
        <Label htmlFor="columns">Columns</Label>
        <Input
          id="columns"
          name="columns"
          type="number"
          min={0}
          max={10}
          defaultValue={columns}
        />
        <Button type="submit">Submit</Button>
      </form>
      <div>
        {Boolean(rows && columns) && <Table rows={rows} columns={columns} />}
      </div>
    </div>
  );
}
