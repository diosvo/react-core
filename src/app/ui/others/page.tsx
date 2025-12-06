import { PropsWithChildren } from 'react';

import GridCard from '@/components/ListItems';

// GreatFrontend
import HolyGrail from './HolyGrail';
import Tweet from './Tweet';

// useEffect
import FakeWebSocket from './use-effect/FakeWebSocket';
import PreviewAvatar from './use-effect/PreviewAvatar';
import Timer from './use-effect/Timer';

// useLayoutEffect
import ResetCoutner from './use-layout-effect/ResetCounter';

// useRef
import Stopwatch from './use-ref/Stopwatch';

// Memoization: memo, useCallback, useMemo
import Memoization from './use-callback/Memoization';
import AddProduct from './use-memo/AddProduct';

// useReducer
import Theme from './use-context/Theme';
import Todo from './use-reducer/Todo';
import UpDownNumber from './use-reducer/UpDownNumber';

// useContext + useReducer
import ContextWithReducer from './context';

// useImperativeHandle
import Playground from './use-imperative-handle/Playground';

const Items: Array<PropsWithChildren<CardItem>> = [
  {
    title: 'Holy Grail',
    description:
      'A classic web layout with header, footer, nav, main, and sidebar.',
    children: <HolyGrail />,
  },
  {
    title: 'Tweet',
    description: "Twitter's tweet UI.",
    children: <Tweet />,
  },
  {
    title: 'Timer',
    description: 'Timer function',
    children: <Timer />,
  },
  {
    title: 'Preview Avatar',
    description: 'Choose an image file and preview it.',
    children: <PreviewAvatar />,
  },
  {
    title: 'Fake WebSocket',
    description: 'Call the event corresponding to each group .',
    children: <FakeWebSocket />,
  },
  {
    title: 'Reset Counter',
    description: 'Rest to 0 when it exceeds 3.',
    children: <ResetCoutner />,
  },
  {
    title: 'A Stopwatch',
    description: 'Start/ stop a timer.',
    children: <Stopwatch />,
  },
  {
    title: 'Memoization',
    description: 'Avoid unnecessary re-renders with with memo and useCallback.',
    children: <Memoization />,
  },
  {
    title: 'Add Product',
    description: 'Calculate total price.',
    children: <AddProduct />,
  },
  {
    title: 'Up & Down',
    description: 'Basic reducer.',
    children: <UpDownNumber />,
  },
  {
    title: 'Todo List',
    description: 'Add and delete jobs.',
    children: <Todo />,
  },
  {
    title: 'Toggle Theme',
    description: 'Switch theme',
    children: <Theme />,
  },
  {
    title: 'Context + useReducer',
    description: 'Todo List with Context and useReducer as Redux.',
    children: <ContextWithReducer />,
  },
  {
    title: 'Playground',
    description: 'Play/ Pause video.',
    children: <Playground />,
  },
];

export default function OthersPage() {
  return <GridCard items={Items} />;
}
