import { forwardRef, type ComponentPropsWithoutRef } from 'react';

import { cn } from '@/lib/utils';

export const TableFooter = forwardRef<
  HTMLTableSectionElement,
  ComponentPropsWithoutRef<'tfoot'>
>(({ className, ...props }, ref) => (
  <tfoot
    ref={ref}
    className={cn(
      'border-t bg-muted/50 font-medium [&>tr]:last:border-b-0',
      className
    )}
    {...props}
  />
));
TableFooter.displayName = 'TableFooter';
