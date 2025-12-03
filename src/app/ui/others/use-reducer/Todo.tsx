'use client';

import { useReducer, useRef } from 'react';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

import { Action } from '@/lib/store';

let id = 0;

interface Task {
  id: number;
  label: string;
}

const INITIAL_TASKS: Array<Task> = [
  { id: id++, label: 'Walk the dog' },
  { id: id++, label: 'Water the plants' },
  { id: id++, label: 'Wash the dishes' },
];

type TodoState = {
  job: string;
  jobs: Array<Task>;
};

// 1️⃣ Initial state
const initialState: TodoState = {
  job: '',
  jobs: INITIAL_TASKS,
};

// 2️⃣ Actions
const SET_JOB = 'set_job';
const ADD_JOB = 'add_job';
const DELETE_JOB = 'delete_job';

const setJob = (payload: string) => ({
  type: SET_JOB,
  payload,
});

const addJob = (payload: string) => ({
  type: ADD_JOB,
  payload,
});

const deleteJob = (id: number) => ({
  type: DELETE_JOB,
  payload: id,
});

// 3️⃣ Reducer
function reducer(state: TodoState, action: Action) {
  switch (action.type) {
    case SET_JOB:
      return {
        ...state,
        job: action.payload as string,
      };
    case ADD_JOB:
      return {
        ...state,
        jobs: [
          ...state.jobs,
          {
            id: id++,
            label: action.payload as string,
          },
        ],
      };
    case DELETE_JOB:
      return {
        ...state,
        jobs: state.jobs.filter(({ id }) => id !== action.payload),
      };

    default:
      throw new Error('Invalid action.');
  }
}

// 4. Dispatch

export default function Todo() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { job, jobs } = state;

  const inputRef = useRef<Nullable<HTMLInputElement>>(null);

  function handleAdd() {
    dispatch(addJob(job));
    dispatch(setJob(''));

    inputRef.current?.focus();
  }

  return (
    <>
      <form className="flex gap-2 mb-4">
        <Input
          ref={inputRef}
          value={job}
          placeholder="Add your task"
          aria-label="Add new task"
          onChange={(e) => dispatch(setJob(e.target.value))}
        />
        <Button
          type="submit"
          disabled={job.trim().length === 0}
          onClick={handleAdd}
        >
          Add
        </Button>
      </form>
      <ul>
        {jobs.length > 0 ? (
          jobs.map(({ id, label }) => (
            <li key={id}>
              &bull; {label}{' '}
              <button onClick={() => dispatch(deleteJob(id))}>&times;</button>
            </li>
          ))
        ) : (
          <>✨ No tasks to do</>
        )}
      </ul>
    </>
  );
}
