import { PropsWithChildren } from 'react';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
  InputGroupText,
} from '@/components/ui/input-group';

import UseBooleanPage from './use-boolean/page';
import UseCounterPage from './use-counter/page';
import UseCyclePage from './use-cycle/page';
import UseDefaultPage from './use-default/page';
import UseStateWithResetPage from './use-state-with-reset/page';
import UseTogglePage from './use-toggle/page';

const Items: Array<PropsWithChildren<{ title: string; description: string }>> =
  [
    {
      title: 'useBoolean',
      description: 'Manages boolean state with useCallback',
      children: <UseBooleanPage />,
    },
    {
      title: 'useCounter',
      description: 'Manages counter state with useCallback',
      children: <UseCounterPage />,
    },
    {
      title: 'useCycle',
      description: 'Increment the index by 1 modulo the length.',
      children: <UseCyclePage />,
    },
    {
      title: 'useDefault',
      description: 'Return the default value when state is null or undefined.',
      children: <UseDefaultPage />,
    },
    {
      title: 'useStateWithReset',
      description: 'Reset the state to its initial value.',
      children: <UseStateWithResetPage />,
    },
    {
      title: 'useToggle',
      description: 'Manage a boolean toggle state.',
      children: <UseTogglePage />,
    },
  ];

export default function StateManagementPage() {
  return (
    <>
      <InputGroup>
        <InputGroupInput placeholder="State" className="pl-1!" />
        <InputGroupAddon>
          <InputGroupText>use</InputGroupText>
        </InputGroupAddon>
        <InputGroupAddon align="inline-end">6 results</InputGroupAddon>
      </InputGroup>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4">
        {Items.map(({ title, description, children }, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>{title}</CardTitle>
              <CardDescription className="text-xs">
                {description}
              </CardDescription>
            </CardHeader>
            <CardContent>{children}</CardContent>
          </Card>
        ))}
      </div>
    </>
  );
}
