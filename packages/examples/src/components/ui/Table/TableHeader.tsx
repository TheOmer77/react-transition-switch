import { forwardRef, type ComponentPropsWithoutRef } from 'react';

import { cn } from '@/lib/utils';

export const TableHeader = forwardRef<
  HTMLTableSectionElement,
  ComponentPropsWithoutRef<'thead'>
>(({ className, ...props }, ref) => (
  <thead ref={ref} className={cn('[&_tr]:border-b', className)} {...props} />
));
TableHeader.displayName = 'TableHeader';
