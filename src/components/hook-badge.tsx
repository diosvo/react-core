import { Badge } from '@/components/ui/badge';
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip';

import { HOOKS } from '@/lib/constants';

type Hook = 'useCallback' | 'useRef';

export default function HookBadge({ hook }: { hook: Hook }) {
  return (
    <>
      {' '}
      <Tooltip>
        <TooltipTrigger>
          <Badge variant="secondary" asChild>
            <a href={HOOKS[hook].link} target="_blank">
              {hook}
            </a>
          </Badge>
        </TooltipTrigger>
        <TooltipContent>{HOOKS[hook].note}</TooltipContent>
      </Tooltip>{' '}
    </>
  );
}
