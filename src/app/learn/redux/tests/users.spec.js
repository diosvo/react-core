import { apiRequestBegan } from '../setup/api';
import { makeStore } from '../setup/store';
import {
  _loadUsers,
  _loadUsersWithoutMiddleware,
  addUser,
  getUserIdByName,
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

    let store;

    const mockAPISuccess = (response) => {
      global.fetch = jest.fn(() =>
        Promise.resolve({
          json: () => Promise.resolve(response),
        }),
      );
    };

    const mockAPIFailure = ({ message }) => {
      global.fetch = jest.fn(() =>
        Promise.resolve({
          json: () => Promise.reject(message),
        }),
      );
    };

    beforeEach(() => {
      store = makeStore();
    });

    const name = 'Dios Vo';
    const savedUser = { id: 1, name };

    const usersSlice = () => store.getState().entities.users;
    const createState = () => ({
      entities: {
        users: {
          list: [],
        },
      },
    });

    test("adds the user to the store if it's saved to server", async () => {
      // [Arrange]
      mockAPISuccess(savedUser);

      // [Act]
      // dispatch(addUser) => store
      // Empty without async/await (because of 'api' middleware)
      await store.dispatch(addUser(name));

      // [Assert]
      expect(usersSlice().list).toContainEqual(savedUser);
    });

    test("does not add the user to the store if it's saved to server", async () => {
      mockAPIFailure({ message: 'Network error' });

      await store.dispatch(addUser(name));

      expect(usersSlice().list).toHaveLength(0);
    });

    describe('selectors', () => {
      test('getUserIdByName', () => {
        const state = createState();
        state.entities.users.list = [savedUser];

        const result = getUserIdByName(name)(state);

        expect(result).toBe(savedUser.id);
      });
    });

    describe('API', () => {
      test('get users from server', async () => {
        mockAPISuccess([savedUser]);

        const result = await store.dispatch(_loadUsers());

        expect(store.getState().entities.users.list).toEqual([savedUser]);
      });
    });
  });
});
