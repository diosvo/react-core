import { apiRequestBegan } from '../setup/api';
import {
  _loadUsersWithoutMiddleware,
  received,
  requested,
  requestFailed,
} from '../setup/users';

describe('usersSlice', () => {
  describe('actionc creators', () => {
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
});
