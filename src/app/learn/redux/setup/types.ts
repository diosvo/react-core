export interface CounterState {
  value: number;
}

export type ApiRequest = Required<{
  url: string;
}> &
  Partial<{
    method: 'GET' | 'POST' | 'PUT' | 'DELETE';
    data: unknown;
    onStart: string;
    onSuccess: string;
    onError: string;
  }>;
