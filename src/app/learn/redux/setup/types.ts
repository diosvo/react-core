export interface CounterState {
  value: number;
}

export type ApiRequest = Required<{
  url: string;
}> &
  Partial<{
    method: string;
    data: unknown;
    onStart: string;
    onSuccess: string;
    onError: string;
  }>;
