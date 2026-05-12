import { apiRequestBegan } from '../setup/api';
import store from '../setup/store';
import {
  _loadUsersWithoutMiddleware,
  addUser,
  received,
  requested,
  requestFailed,
} from '../setup/users';

describe('usersSlice', () => {
  describe.skip('solitary tests', () => {
    test('addUser', () => {
      const result = _loadUsersWithoutMiddleware();
      const expected = {
        type: apiRequestBegan.type,
        payload: {
          url: '/users',
          onStart: requested.type,
          onSuccess: received.type,
          onError: requestFailed.type,
        },
      };
      expect(result).toEqual(expected);
    });
  });

  describe('social tests', () => {
    test('handles addUser action', async () => {
      // dispatch(addUser) => store
      const user = 'Dios Vo';

      // Empty without async/await (because of 'api' middleware)
      await store.dispatch(addUser(user));

      expect(store.getState().entities.users.list).toHaveLength(1);
    });
  });
});
