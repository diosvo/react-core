import { apiRequestBegan, apiRequestFailed, apiRequestSuccess } from '../api';

const api =
  ({ dispatch }) =>
  (next) =>
  async (action) => {
    if (action.type !== apiRequestBegan.type) return next(action);

    // Pass the action to the next middleware or reducers (dispatch success or failure actions)
    next(action);

    if (!action.payload) return;

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
      // General
      dispatch(apiRequestSuccess(result));
      // Specific
      if (onSuccess) dispatch({ type: onSuccess, payload: result });
    } catch (error) {
      // General
      dispatch(apiRequestFailed((error as Error).message));
      // Specific
      if (onError) dispatch({ type: onError, payload: error });
    }

    // We don't want to pass this action to the next middleware or reducers
  };

export default api;
