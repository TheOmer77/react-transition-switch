import {
  type ComponentPropsWithoutRef,
  type ElementRef,
  forwardRef,
} from 'react';
import { List } from '@radix-ui/react-tabs';

import { cn } from '@/lib/utils';

export const TabsList = forwardRef<
  ElementRef<typeof List>,
  ComponentPropsWithoutRef<typeof List>
>(({ className, ...props }, ref) => (
  <List
    ref={ref}
    className={cn(
      'inline-flex h-10 items-center justify-center rounded-lg bg-card p-1 text-muted-foreground',
      className
    )}
    {...props}
  />
));
TabsList.displayName = List.displayName;
