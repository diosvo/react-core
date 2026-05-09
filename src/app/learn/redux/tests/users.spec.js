import { apiRequestBegan } from '../setup/api';
import { _loadUsers, received, requested, requestFailed } from '../setup/users';

describe('usersSlice', () => {
  describe('actionc creators', () => {
    test('addUser', () => {
      const result = _loadUsers();
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
});
