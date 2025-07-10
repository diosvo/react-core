import { act, renderHook } from '@testing-library/react';

import useCycle from './use-cycle';

describe('useCycle', () => {
  const modes = ['low', 'medium', 'high'];

  test('return values', () => {
    const { result } = renderHook(() => useCycle(...modes));

    expect(result.current[0]).toBe(modes[0]);
    expect(typeof result.current[1]).toBe('function');
  });

  test('cycle', () => {
    const { result } = renderHook(() => useCycle(...modes));

    act(() => {
      result.current[1]();
    });

    expect(result.current[0]).toBe(modes[1]);
  });
});
