import store from '../setup/store';

import { addBug, assignBugToUser } from '../setup/actions';
import { getBugsByUser, getUnresolvedBugs } from '../setup/reducer';

import { decrement, increment, incrementByAmount } from '../setup/slices';
import { add as addUser, getUserIdByName, loadUsers } from '../setup/users';

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

//#region 🧨 Middleware
// Let middleware take care of "everything" -- side effects and async logic

// Call an API
// Promise resolved => dispatch()
// Promise rejected => dispatch()

store.dispatch(() => {
  store.dispatch({ type: 'apiCallBegan', bugs: [1, 2, 3] });
});

store.dispatch({
  type: 'error',
  payload: { message: 'An error occurred' },
});

//#endregion

//#region ▶️ Interact with server

// 🤔 Problem
// Don't know:
// - what endpoint should call
// - what actions should dispatch on success or failure
// store.dispatch(
//   apiRequestBegan({
//     url: '/users',
//     onSuccess: 'user/received',
//   }),
// );

// Solution ^ - Move to specific slice to avoid hardcode
store.dispatch(loadUsers());

// 🤔 Problem
// Duplicate code to call the same API in different places
setTimeout(() => {
  store.dispatch(loadUsers());
}, 2000);
