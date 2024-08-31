import { forwardRef, type ComponentPropsWithoutRef } from 'react';

import { CardTitle } from '@/components/ui/Card';
import { cn } from '@/lib/utils';

export const StepTitle = forwardRef<
  HTMLParagraphElement,
  ComponentPropsWithoutRef<'h3'>
>(({ className, children, ...props }, ref) => (
  <CardTitle ref={ref} className={cn('text-2xl', className)} {...props}>
    {children}
  </CardTitle>
));
StepTitle.displayName = 'StepTitle';
