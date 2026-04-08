import { addBug, removeBug, resolveBug } from '../setup/actions';
import store from '../setup/store';

const unsubcribe = store.subscribe(() =>
  console.log('Store changed!', store.getState()),
);

store.dispatch(addBug('Bug 1'));
store.dispatch(resolveBug(1));

unsubcribe(); // Stop listening to state changes

store.dispatch(removeBug(1));

console.log(store.getState());
