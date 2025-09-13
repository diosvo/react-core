import { renderHook, waitFor } from '@testing-library/react';

import useQuery from './use-query';

describe('useQuery', () => {
  test('success state', async () => {
    const { result } = renderHook(() => useQuery(async () => 10));

    await waitFor(() => {
      expect(result.current).toEqual({
        loading: false,
        error: null,
        data: 10,
      });
    });
  });

  test('error state', async () => {
    const error = new Error('error');

    const { result } = renderHook(() =>
      useQuery(async () => {
        throw error;
      })
    );

    await waitFor(() => {
      expect(result.current).toStrictEqual({
        loading: false,
        error,
        data: null,
      });
    });
  });
});
