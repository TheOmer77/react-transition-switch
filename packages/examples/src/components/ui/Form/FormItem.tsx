import { cn } from '@/lib/utils';
import { forwardRef, type ComponentPropsWithoutRef } from 'react';

export const FormItem = forwardRef<
  HTMLDivElement,
  ComponentPropsWithoutRef<'div'>
>(({ className, children, ...props }, ref) => (
  <div
    {...props}
    ref={ref}
    className={cn('flex select-none flex-row items-center gap-1', className)}
  >
    {children}
  </div>
));
FormItem.displayName = 'FormItem';
