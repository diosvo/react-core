import { Action } from '@/lib/store';
import { ADD_TODO, SET_INPUT } from './0-constants';

export type StateProps = {
  todoInput: string;
  todos: Array<string>;
};

const initialState: StateProps = {
  todoInput: '',
  todos: [],
};

function reducer(state: StateProps, action: Action) {
  switch (action.type) {
    case SET_INPUT:
      return {
        ...state,
        todoInput: action.payload,
      };
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };

    default:
      throw new Error('Invalid action');
  }
}

export { initialState };
export default reducer;
