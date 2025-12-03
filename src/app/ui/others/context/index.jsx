'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

import { addTodo, setTodoInput } from './store/1-actions';
import { useStore } from './store/Context';
import Provider from './store/Provider';

function Content() {
  const { state, dispatch } = useStore();

  const handleAdd = () => {
    dispatch(addTodo(state.todoInput));
    dispatch(setTodoInput(''));
  };

  return (
    <>
      <form className="flex gap-2 mb-2">
        <Input
          value={state.todoInput}
          onChange={(e) => dispatch(setTodoInput(e.target.value))}
        />
        <Button
          type="submit"
          onClick={handleAdd}
          disabled={state.todoInput.trim().length === 0}
        >
          Add
        </Button>
      </form>
      <ul>
        {state.todos.map((job, index) => (
          <li key={index}>&bull; {job}</li>
        ))}
      </ul>
    </>
  );
}

export default function ContextWithReducer() {
  return (
    <Provider>
      <Content />
    </Provider>
  );
}
