import {
  forwardRef,
  type ComponentPropsWithoutRef,
  type ElementRef,
} from 'react';
import { Icon, Trigger } from '@radix-ui/react-select';
import { ChevronDownIcon } from 'lucide-react';

import { cn } from '@/lib/utils';

export const SelectTrigger = forwardRef<
  ElementRef<typeof Trigger>,
  ComponentPropsWithoutRef<typeof Trigger>
>(({ className, children, ...props }, ref) => (
  <Trigger
    ref={ref}
    className={cn(
      `flex h-9 w-full items-center justify-between whitespace-nowrap
rounded-md border border-input bg-background px-3 py-2 text-sm shadow-sm
ring-offset-background placeholder:text-muted-foreground focus:outline-none
focus:ring-2 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50
[&>span]:line-clamp-1`,
      className
    )}
    {...props}
  >
    {children}
    <Icon asChild>
      <ChevronDownIcon className='h-4 w-4 opacity-50' />
    </Icon>
  </Trigger>
));
SelectTrigger.displayName = Trigger.displayName;
