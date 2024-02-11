import { forwardRef, type ComponentPropsWithoutRef } from 'react';

import { cn } from '@/lib/utils';

export const TableCaption = forwardRef<
  HTMLTableCaptionElement,
  ComponentPropsWithoutRef<'caption'>
>(({ className, ...props }, ref) => (
  <caption
    ref={ref}
    className={cn('mt-4 text-sm text-muted-foreground', className)}
    {...props}
  />
));
TableCaption.displayName = 'TableCaption';
