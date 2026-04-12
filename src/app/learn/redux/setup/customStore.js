import reducer from './reducer';

function createStore(reducer) {
  let state;
  let listeners = [];

  function subscribe(listener) {
    listeners.push(listener);
  }

  function dispatch(action) {
    // Call the reducer to get the new state
    state = reducer(state, action);
    // Notify all listeners about the state change
    for (let listener of listeners) {
      listener();
    }
  }

  function getState() {
    return state;
  }

  return {
    subscribe,
    dispatch,
    getState,
  };
}

export default createStore(reducer);
