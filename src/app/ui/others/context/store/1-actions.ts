import { ADD_TODO, SET_INPUT } from './0-constants';

export const setTodoInput = (payload: string) => ({
  type: SET_INPUT,
  payload,
});

export const addTodo = (payload: string) => ({
  type: ADD_TODO,
  payload,
});
