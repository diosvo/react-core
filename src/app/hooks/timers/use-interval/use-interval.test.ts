import { act, renderHook } from '@testing-library/react';

import useInterval from './use-interval';

describe('useInterval', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  test('return values', () => {
    const { result } = renderHook(() => useInterval(() => {}, 0));

    expect(result.current).toBe(undefined);
  });

  test('calls callback in time', () => {
    const callback = jest.fn();
    renderHook(() => useInterval(callback, 1000));

    expect(callback).not.toHaveBeenCalled();

    act(() => jest.advanceTimersByTime(1000));

    expect(callback).toHaveBeenCalledTimes(1);
  });

  test('calls callback multiple times', () => {
    const callback = jest.fn();
    renderHook(() => useInterval(callback, 1000));

    expect(callback).not.toHaveBeenCalled();
    const times = 5;
    act(() => jest.advanceTimersByTime(1000 * times));

    expect(callback).toHaveBeenCalledTimes(times);
  });

  test('clears interval on unmount', () => {
    const callback = jest.fn();
    const { unmount } = renderHook(() => useInterval(callback, 1000));

    unmount();
    act(() => jest.advanceTimersByTime(1000));

    expect(callback).not.toHaveBeenCalled();
  });

  describe('callback changes', () => {
    test('before the first execution', () => {
      const callback = jest.fn();
      const { rerender } = renderHook<void, { callback: () => void }>(
        ({ callback }) => useInterval(callback, 1000),
        {
          initialProps: { callback },
        },
      );

      expect(callback).not.toHaveBeenCalled();

      jest.advanceTimersByTime(500);

      const callbackNew = jest.fn();
      rerender({ callback: callbackNew });

      expect(callback).not.toHaveBeenCalled();
      expect(callbackNew).not.toHaveBeenCalled();

      jest.advanceTimersByTime(500);
      expect(callback).not.toHaveBeenCalled();
      expect(callbackNew).toHaveBeenCalledTimes(1);
    });

    test('after the first execution', () => {
      const callback = jest.fn();
      const { rerender } = renderHook<void, { callback: () => void }>(
        ({ callback }) => useInterval(callback, 1000),
        {
          initialProps: { callback },
        },
      );

      expect(callback).not.toHaveBeenCalled();

      jest.advanceTimersByTime(1000);
      expect(callback).toHaveBeenCalledTimes(1);

      const callbackNew = jest.fn();
      rerender({ callback: callbackNew });

      expect(callbackNew).not.toHaveBeenCalled();
      jest.advanceTimersByTime(1000);

      expect(callback).toHaveBeenCalledTimes(1);
      expect(callbackNew).toHaveBeenCalledTimes(1);
    });
  });

  describe('delay', () => {
    describe('delay changes', () => {
      test('before the first execution', () => {
        const callback = jest.fn();
        const { rerender } = renderHook<void, { delay: number | null }>(
          ({ delay }) => useInterval(callback, delay),
          {
            initialProps: { delay: 1000 },
          },
        );

        expect(callback).not.toHaveBeenCalled();

        rerender({ delay: 200 });
        jest.advanceTimersByTime(1000);

        expect(callback).toHaveBeenCalledTimes(5);
      });

      test('after the first execution', () => {
        const callback = jest.fn();
        const { rerender } = renderHook<void, { delay: number | null }>(
          ({ delay }) => useInterval(callback, delay),
          {
            initialProps: { delay: 1000 },
          },
        );

        jest.advanceTimersByTime(1000);

        expect(callback).toHaveBeenCalledTimes(1);

        rerender({ delay: 200 });
        jest.advanceTimersByTime(1000);

        expect(callback).toHaveBeenCalledTimes(6);
      });
    });

    test('changed to null', () => {
      const callback = jest.fn();
      const { rerender } = renderHook<void, { delay: number | null }>(
        ({ delay }) => useInterval(callback, delay),
        {
          initialProps: { delay: 1000 },
        },
      );

      expect(callback).not.toHaveBeenCalled();

      rerender({ delay: null });
      jest.advanceTimersByTime(1000);

      expect(callback).not.toHaveBeenCalled();
    });

    test('starts with null', () => {
      const callback = jest.fn();
      const { rerender } = renderHook<void, { delay: number | null }>(
        ({ delay }) => useInterval(callback, delay),
        {
          initialProps: { delay: null },
        },
      );

      expect(callback).not.toHaveBeenCalled();

      rerender({ delay: 500 });
      jest.advanceTimersByTime(1000);

      expect(callback).toHaveBeenCalledTimes(2);
    });
  });
});
