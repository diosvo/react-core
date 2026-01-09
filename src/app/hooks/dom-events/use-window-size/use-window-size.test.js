import { act, renderHook } from '@testing-library/react';

import useWindowSize from './use-window-size';

describe('useWindowSize', () => {
  beforeEach(() => {
    Object.defineProperty(window, 'innerWidth', {
      writable: true,
      configurable: true,
      value: 1024,
    });
    Object.defineProperty(window, 'innerHeight', {
      writable: true,
      configurable: true,
      value: 768,
    });
  });

  test('return values', () => {
    const { result } = renderHook(() => useWindowSize());

    expect(typeof result.current).toBe('object');
    expect(typeof result.current.width).toBe('number');
    expect(typeof result.current.height).toBe('number');
  });

  test('updates on window resize', () => {
    const { result } = renderHook(() => useWindowSize());

    act(() => {
      window.innerWidth = 1920;
      window.innerHeight = 1080;
      window.dispatchEvent(new Event('resize'));
    });

    expect(result.current.width).toBe(1920);
    expect(result.current.height).toBe(1080);
  });
});
