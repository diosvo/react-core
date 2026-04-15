import { decrement, increment, incrementByAmount } from '../setup/slices';
import store from '../setup/store';

const unsubcribe = store.subscribe(() =>
  console.log('Store changed!', store.getState()),
);

store.dispatch(increment());
store.dispatch(increment());
store.dispatch(decrement());
store.dispatch(incrementByAmount(5));

unsubcribe(); // Stop listening to state changes
