// import { addBug, removeBug, resolveBug } from '../setup/actions';
import store from '../setup/store';
import { increment } from '../setup/toolkit';

const unsubcribe = store.subscribe(() =>
  console.log('Store changed!', store.getState()),
);

store.dispatch(increment());
// store.dispatch(addBug('Bug 2'));
// store.dispatch(addBug('Bug 3'));
// store.dispatch(resolveBug(1));

unsubcribe(); // Stop listening to state changes

// store.dispatch(removeBug(1));
