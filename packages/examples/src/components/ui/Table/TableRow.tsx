import { forwardRef, type ComponentPropsWithoutRef } from 'react';

import { cn } from '@/lib/utils';

export const TableRow = forwardRef<
  HTMLTableRowElement,
  ComponentPropsWithoutRef<'tr'>
>(({ className, ...props }, ref) => (
  <tr
    ref={ref}
    className={cn(
      `border-b transition-colors hover:bg-foreground/5 data-[state=selected]:bg-muted`,
      className
    )}
    {...props}
  />
));
TableRow.displayName = 'TableRow';
