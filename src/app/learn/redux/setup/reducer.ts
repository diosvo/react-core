import { createSelector } from '@reduxjs/toolkit';

import {
  ADD_BUG,
  ASSIGN_BUG_TO_USER,
  REMOVE_BUG,
  RESOLVE_BUG,
} from './actions';
import { RootState } from './store';

let lastId = 0;

// Reducer is a pure function - call multiple times with the same input, and it will always return the same result

interface Bug {
  id: number;
  resolved: boolean;
  description: string;
  userId?: Nullable<string>;
}

interface BugWithUser extends Bug {
  bugId: number;
  userId: Nullable<string>;
}

type Action = {
  type: 'ADD_BUG' | 'RESOLVE_BUG' | 'REMOVE_BUG' | 'ASSIGN_BUG_TO_USER';
  payload: Bug;
};

// 🤔 Problem: `filter` method creates new array when we call selector
const _getUnresolvedBugs = (state: RootState) =>
  state.entities.bugs.filter(({ resolved }) => !resolved);

// Solution ^ Memoization
export const getUnresolvedBugs = createSelector(
  // input
  (state: RootState) => state.entities.bugs,
  // output: return the result from the cache
  (bugs) => bugs.filter(({ resolved }) => !resolved),
);

export const getBugsByUser = (userId: Nullable<string>) =>
  createSelector(
    (state: RootState) => state.entities.bugs,
    (bugs) => {
      return bugs.filter((bug) => bug.userId === userId);
    },
  );

export default function reducer(state = [], action: Action) {
  switch (action.type) {
    case ADD_BUG:
      return [
        ...state,
        {
          id: ++lastId,
          description: action.payload.description,
          resolved: false,
        },
      ];
    case RESOLVE_BUG: {
      return state.map((bug: Bug) =>
        bug.id !== action.payload.id ? bug : { ...bug, resolved: true },
      );
    }
    case REMOVE_BUG:
      return state.filter((bug: Bug) => bug.id !== action.payload.id);
    case ASSIGN_BUG_TO_USER:
      const { bugId, userId } = action.payload as unknown as BugWithUser;
      if (bugId == undefined || userId == undefined) return state;

      return state.map((bug: Bug) =>
        bug.id !== bugId ? bug : { ...bug, userId },
      );
    default:
      return state;
  }
}
