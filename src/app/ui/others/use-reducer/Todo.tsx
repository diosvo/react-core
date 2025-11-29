'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useReducer, useRef } from 'react';

type TodoState = {
  job: string;
  jobs: Array<string>;
};

// 1. Initial state
const initialState: TodoState = {
  job: '',
  jobs: [],
};

// 2. Actions
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

const deleteJob = (payload: string) => ({
  type: DELETE_JOB,
  payload,
});

// 3. Reducer
function reducer(state: TodoState, action: { type: string; payload: string }) {
  switch (action.type) {
    case SET_JOB:
      return {
        ...state,
        job: action.payload,
      };
    case ADD_JOB:
      return {
        ...state,
        jobs: [...state.jobs, action.payload],
      };
    case DELETE_JOB:
      return {
        ...state,
        jobs: state.jobs.filter((item) => item !== action.payload),
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
      <div className="flex gap-2 mb-2">
        <Input
          ref={inputRef}
          value={job}
          onChange={(e) => dispatch(setJob(e.target.value))}
        />
        <Button onClick={handleAdd}>Add</Button>
      </div>
      <ul>
        {jobs.map((job, index) => (
          <li key={index}>
            &bull; {job}{' '}
            <button onClick={() => dispatch(deleteJob(job))}>&times;</button>
          </li>
        ))}
      </ul>
    </>
  );
}
