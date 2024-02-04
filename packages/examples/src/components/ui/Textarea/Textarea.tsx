import { forwardRef, type ComponentPropsWithoutRef } from 'react';

import { cn } from '@/lib/utils';

export const Textarea = forwardRef<
  HTMLTextAreaElement,
  ComponentPropsWithoutRef<'textarea'>
>(({ className, ...props }, ref) => (
  <textarea
    className={cn(
      `flex min-h-[60px] w-full rounded-md border border-input bg-background
px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground
focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring
disabled:cursor-not-allowed disabled:opacity-50`,
      className
    )}
    ref={ref}
    {...props}
  />
));
Textarea.displayName = 'Textarea';
