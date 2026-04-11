// Actions

const LOAD = 'app/ducks-pattern/LOAD';

// Reducer
export default function reducer(
  state = {},
  action: { type: string; payload: string },
) {
  switch (action.type) {
    case LOAD:
      return { ...state, loading: true };
    default:
      return state;
  }
}

// Action Creators
export const load = () => ({
  type: LOAD,
});

// Side effects, only as applicable
// e.g. thunks, epics, etc
export function getData() {
  return (dispatch: any) => {
    dispatch(load());
  };
}
