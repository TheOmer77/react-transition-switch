import {
  forwardRef,
  type ComponentPropsWithoutRef,
  type ElementRef,
} from 'react';
import { Trigger } from '@radix-ui/react-tabs';

import { cn } from '@/lib/utils';

export const TabsTrigger = forwardRef<
  ElementRef<typeof Trigger>,
  ComponentPropsWithoutRef<typeof Trigger>
>(({ className, ...props }, ref) => (
  <Trigger
    ref={ref}
    className={cn(
      `inline-flex items-center justify-center whitespace-nowrap rounded-md
px-3 py-1 text-sm font-medium ring-offset-background transition-all
focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring
focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50
data-[state=active]:bg-background data-[state=active]:text-foreground
data-[state=active]:shadow`,
      className
    )}
    {...props}
  />
));
TabsTrigger.displayName = Trigger.displayName;
