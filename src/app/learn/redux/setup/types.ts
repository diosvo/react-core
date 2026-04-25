export interface CounterState {
  value: number;
}

export type ApiRequest = Required<{
  url: string;
}> &
  Partial<{
    method: string;
    data: unknown;
    onSuccess: string;
    onError: string;
  }>;
