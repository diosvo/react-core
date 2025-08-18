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

export enum Sort {
  ASC = 'asc',
  DESC = 'desc',
}
export type SortDirection = Lowercase<keyof typeof Sort>;
