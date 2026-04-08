export const ADD_BUG = 'ADD_BUG';
export const RESOLVE_BUG = 'RESOLVE_BUG';
export const REMOVE_BUG = 'REMOVE_BUG';

export function addBug(description: string) {
  return {
    type: ADD_BUG,
    payload: {
      description,
    },
  };
}

export function resolveBug(id: number) {
  return {
    type: RESOLVE_BUG,
    payload: {
      id,
    },
  };
}

export function removeBug(id: number) {
  return {
    type: REMOVE_BUG,
    payload: {
      id,
    },
  };
}
