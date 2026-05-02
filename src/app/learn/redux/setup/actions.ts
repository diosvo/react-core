export const ADD_BUG = 'ADD_BUG';
export const RESOLVE_BUG = 'RESOLVE_BUG';
export const REMOVE_BUG = 'REMOVE_BUG';
export const ASSIGN_BUG_TO_USER = 'ASSIGN_BUG_TO_USER';

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

export function assignBugToUser(bugId: number, userId: Nullable<number>) {
  return {
    type: ASSIGN_BUG_TO_USER,
    payload: {
      bugId,
      userId,
    },
  };
}
