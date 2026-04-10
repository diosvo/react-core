import { addBug, removeBug, resolveBug } from '../setup/actions';
import customStore from '../setup/customStore';

const unsubcribe = customStore.subscribe(() =>
  console.log('Store changed!', customStore.getState()),
);

customStore.dispatch(addBug('Bug 1'));
customStore.dispatch(resolveBug(1));

// unsubcribe(); // Stop listening to state changes

customStore.dispatch(removeBug(1));
