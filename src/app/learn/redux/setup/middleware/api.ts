const api =
  ({ dispatch }) =>
  (next) =>
  async (action) => {
    if (action.type !== 'apiCallBegan') return next(action);

    // Pass the action to the next middleware or reducers (dispatch success or failure actions)
    next(action);

    const { url, method, data, onSuccess, onError } = action.payload;

    // Call the API
    try {
      const response = await fetch(
        'https://jsonplaceholder.typicode.com' + url,
        {
          method,
          body: JSON.stringify(data),
        },
      );
      const result = await response.json();
      // Dispatch the success action
      dispatch({ type: onSuccess, payload: result });
    } catch (error) {
      // Dispatch the error action
      dispatch({ type: onError, payload: error });
    }

    // We don't want to pass this action to the next middleware or reducers
  };

export default api;
