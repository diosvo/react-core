import { ReactNode } from 'react';

import { Separator } from '@/components/ui/separator';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { Lightbulb, Rocket } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from './ui/alert';

export default function UiLayout({
  title,
  definition,
  description,
  implementation,
  children,
}: {
  title: ReactNode;
  description: ReactNode;
  children: ReactNode;
  definition?: ReactNode;
  implementation?: ReactNode;
}) {
  return (
    <div>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <h4 className="text-lg leading-none font-medium cursor-help hover:underline decoration-dotted">
              {title}
            </h4>
          </TooltipTrigger>
          {definition && (
            <TooltipContent align="start" className="text-md">
              {definition}
            </TooltipContent>
          )}
        </Tooltip>
      </TooltipProvider>

      <div className="mt-4 gap-4 text-sm grid grid-cols-1 md:grid-cols-2">
        {description && (
          <Alert>
            <Rocket color="blue" />
            <AlertTitle>Improvements</AlertTitle>
            <AlertDescription>{description}</AlertDescription>
          </Alert>
        )}
        {implementation && (
          <Alert>
            <Lightbulb color="red" />
            <AlertTitle>Ideas</AlertTitle>
            <AlertDescription>{implementation}</AlertDescription>
          </Alert>
        )}
      </div>

      <Separator className="my-4 " />
      {children}
    </div>
  );
}
