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
    // ❌ Should not:
    // - Touch external resources (e.g. API) - Slow down
    // - External resources may be unavailable (e.g. API down) - Unreliable

    test('handles addUser action', async () => {
      const name = 'Dios Vo';
      const savedUser = { id: 1, name };
      global.fetch = jest.fn(() =>
        Promise.resolve({
          json: () => Promise.resolve(savedUser),
        }),
      );

      // dispatch(addUser) => store
      // Empty without async/await (because of 'api' middleware)
      await store.dispatch(addUser(name));

      expect(store.getState().entities.users.list).toContainEqual(savedUser);
    });
  });
});
