import { addBug } from '../setup/actions';
import { getUnresolvedBugs } from '../setup/reducer';
import { decrement, increment, incrementByAmount } from '../setup/slices';
import store from '../setup/store';

const unsubcribe = store.subscribe(() =>
  console.log('Store changed!', store.getState()),
);

store.dispatch(increment());
store.dispatch(addBug('Bug 1'));

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
