import { renderHook } from '@testing-library/react';

import useFocus from './use-focus';

describe('useFocus', () => {
  beforeEach(() => {
    Object.defineProperty(globalThis.window, 'requestAnimationFrame', {
      value: (cb: FrameRequestCallback) => cb(0),
    });
  });

  test('return values', () => {
    const { result } = renderHook(() => useFocus());

    expect(Array.isArray(result.current)).toBe(true);
    expect(result.current.length).toBe(2);
    expect(typeof result.current[0]).toBe('object');
    expect(typeof result.current[1]).toBe('function');
  });
});
