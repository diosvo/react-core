import { useCallback, useState } from 'react';

type MapOrEntries<K, V> = Map<K, V> | Array<[K, V]>;

interface UseMapReturn<K, V> {
  // The map object.
  map: Readonly<Map<K, V>>;
  // Set a key-value pair in the map.
  set: (key: K, value: V) => void;
  // Set all key-value pairs in the map.
  setAll: (entries: MapOrEntries<K, V>) => void;
  // Remove a key-value pair from the map.
  remove: (key: K) => void;
  // Clear the map to an empty state.
  clear: () => void;
}

export default function useMap<K, V>(
  initialState: MapOrEntries<K, V> = new Map(),
): UseMapReturn<K, V> {
  const [map, setMap] = useState(new Map(initialState));

  const set = useCallback((key: K, value: V) => {
    setMap((prev) => {
      const copy = new Map(prev);
      copy.set(key, value);
      return copy;
    });
  }, []);

  const setAll = useCallback((entries: MapOrEntries<K, V>) => {
    setMap(() => new Map(Array.from(entries)));
  }, []);

  const remove = useCallback(
    (key: K) =>
      setMap((prev) => {
        const copy = new Map(prev);
        copy.delete(key);
        return copy;
      }),
    [],
  );

  const clear = useCallback(() => setMap(() => new Map()), []);

  return {
    map,
    set,
    setAll,
    remove,
    clear,
  };
}
