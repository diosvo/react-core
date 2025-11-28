import { PropsWithChildren } from 'react';

import UiLayout from '@/components/ui-layout';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

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
import Memoization from './use-callback/Memoization';
import Stopwatch from './use-ref/Stopwatch';

const Items: Array<PropsWithChildren<{ title: string; description: string }>> =
  [
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
      description:
        'Avoid unnecessary re-renders with with memo and useCallback.',
      children: <Memoization />,
    },
  ];

export default function OthersPage() {
  return (
    <UiLayout title="Others">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4">
        {Items.map(({ title, description, children }, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>{title}</CardTitle>
              <CardDescription>{description}</CardDescription>
            </CardHeader>
            <CardContent>{children}</CardContent>
          </Card>
        ))}
      </div>
    </UiLayout>
  );
}
