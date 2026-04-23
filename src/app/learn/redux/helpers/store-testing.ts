import store from '../setup/store';

import { addBug, assignBugToUser } from '../setup/actions';
import { getBugsByUser, getUnresolvedBugs } from '../setup/reducer';
import { decrement, increment, incrementByAmount } from '../setup/slices';
import { add as addUser, getUserIdByName } from '../setup/users';

const unsubcribe = store.subscribe(() =>
  console.log('Store changed!', store.getState()),
);

store.dispatch(increment());
store.dispatch(addBug('Bug 1'));
store.dispatch(addBug('Bug 2'));
store.dispatch(addUser('User 1'));

const userId = getUserIdByName('User 1')(store.getState());
store.dispatch(assignBugToUser(1, userId));
const bugs = getBugsByUser('2')(store.getState());

store.dispatch(increment());
store.dispatch(decrement());
store.dispatch(incrementByAmount(5));

//#region Selectors

// 🤔 Problem:
// - Compute derived data could be complex
// - The logic could be used in *different* places
const unresolvedBugs = store
  .getState()
  .entities.bugs.filter(({ resolved }) => !resolved);

// Solution ^
console.log('Unresolved bugs', getUnresolvedBugs(store.getState()));

// 🤔 Problem ^ Two different array in the memory without createSelector
const x = getUnresolvedBugs(store.getState());
const y = getUnresolvedBugs(store.getState());

//#endregion

unsubcribe(); // Stop listening to state changes

store.dispatch(() => {
  // Call an API
  // When the promise is resolved => dispatch()
  // If the promise is rejected => dispatch()
  store.dispatch({ type: 'apiCallBegan', bugs: [1, 2, 3] });
});

store.dispatch({
  type: 'error',
  payload: { message: 'An error occurred' },
});
