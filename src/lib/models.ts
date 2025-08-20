import React from 'react';

export interface Section {
  value: string;
  title: string;
  content: string;
}

export interface User {
  id: number;
  name: string;
  age: number;
  occupation: string;
}

export interface House {
  id: number;
  street: string;
  city: string;
  state: string;
  zip: string;
  built_year: number;
}

// Table
export enum Sort {
  ASC = 'asc',
  DESC = 'desc',
}
export type SortDirection = Lowercase<keyof typeof Sort>;
export type ColumnDef<T> = Readonly<{
  label: string;
  key: string;
  renderCell: (row: T) => React.ReactNode;
  comparator: (a: T, b: T, sortDirection: SortDirection) => number;
}>;
export type Columns<T> = ReadonlyArray<ColumnDef<T>>;
