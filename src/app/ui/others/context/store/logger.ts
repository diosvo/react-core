import { Action } from '@/lib/store';
import { StateProps } from './2-reducer';

type LoggerProps = (state: StateProps, action: Action) => StateProps;

// Act as middleware
function logger(reducer: LoggerProps) {
  return (prevState: StateProps, action: Action) => {
    console.group(action.type);
    console.log('Prev state: ', prevState);
    console.log('Action: ', action);

    const newState = reducer(prevState, action);

    console.log('Next state: ', newState);
    console.log('Action: ', action);
    console.groupEnd();

    return newState;
  };
}

export default logger;
