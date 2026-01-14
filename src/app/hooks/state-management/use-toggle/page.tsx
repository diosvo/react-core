'use client';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ButtonGroup } from '@/components/ui/button-group';

import useToggle from './use-toggle';

export default function UseTogglePage() {
  const [value, toggle, setValue] = useToggle();

  return (
    <>
      <Badge variant="secondary">Enabled: {value ? 'On' : 'Off'}</Badge>
      <ButtonGroup className="mt-2">
        <Button onClick={toggle}>Toggle</Button>
        <Button variant="secondary" onClick={() => setValue(true)}>
          Enable
        </Button>
        <Button variant="destructive" onClick={() => setValue(false)}>
          Disable
        </Button>
      </ButtonGroup>
    </>
  );
}
