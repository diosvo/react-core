import { renderHook } from '@testing-library/react';
import { act } from 'react';

import useCounter from './use-counter';

describe('useCounter', () => {
  test('return values', () => {
    const { result } = renderHook(() => useCounter());

    expect(result.current.count).toBe(0);
    expect(typeof result.current.increment).toBe('function');
    expect(typeof result.current.increment).toBe('function');
    expect(typeof result.current.decrement).toBe('function');
    expect(typeof result.current.reset).toBe('function');
    expect(typeof result.current.setCount).toBe('function');
  });

  test('initial value', () => {
    const { result } = renderHook(() => useCounter(3));

    expect(result.current.count).toBe(3);
  });

  test('increment', () => {
    const { result } = renderHook(() => useCounter());

    act(() => {
      result.current.increment();
    });
    expect(result.current.count).toBe(1);
  });

  test('decrement', () => {
    const { result } = renderHook(() => useCounter());

    act(() => {
      result.current.decrement();
    });
    expect(result.current.count).toBe(-1);
  });

  test('reset', () => {
    const { result } = renderHook(() => useCounter());

    act(() => {
      result.current.increment();
      result.current.increment();
      result.current.increment();
    });
    expect(result.current.count).toBe(3);

    act(() => {
      result.current.reset();
    });
    expect(result.current.count).toBe(0);
  });
});
