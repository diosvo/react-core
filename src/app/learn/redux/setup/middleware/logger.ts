const logger = (store) => (next) => (action) => {
  console.log('[logger]', 'store', store);
  console.log('[logger]', 'next', next);
  console.log('[logger]', 'action', action);
  next(action);
};

// Currying
// N => 1

export default logger;
