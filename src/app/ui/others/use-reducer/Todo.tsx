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

const SET_JOB = 'set_job';
const ADD_JOB = 'add_job';
const DELETE_JOB = 'delete_job';

interface SetJobAction extends Action {
  type: typeof SET_JOB;
  payload: string;
}

interface AddJobAction extends Action {
  type: typeof ADD_JOB;
  payload: string;
}

interface DeleteJobAction extends Action {
  type: typeof DELETE_JOB;
  payload: number;
}

type JobAction = SetJobAction | AddJobAction | DeleteJobAction;

// 1️⃣ Initial state
const initialState: TodoState = {
  job: '',
  jobs: INITIAL_TASKS,
};

// 2️⃣ Actions

const setJob = (payload: string): SetJobAction => ({
  type: SET_JOB,
  payload,
});

const addJob = (payload: string): AddJobAction => ({
  type: ADD_JOB,
  payload,
});

const deleteJob = (id: number): DeleteJobAction => ({
  type: DELETE_JOB,
  payload: id,
});

// 3️⃣ Reducer
function reducer(state: TodoState, action: JobAction) {
  switch (action.type) {
    case SET_JOB:
      return {
        ...state,
        job: action.payload,
      };
    case ADD_JOB:
      return {
        ...state,
        jobs: [
          ...state.jobs,
          {
            id: id++,
            label: action.payload,
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

// 4️⃣ Dispatch

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
