import {
  forwardRef,
  type ComponentPropsWithoutRef,
  type ElementRef,
} from 'react';

import { cn } from '@/lib/utils';

export const Card = forwardRef<
  ElementRef<'div'>,
  ComponentPropsWithoutRef<'div'>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      'rounded-lg bg-card text-card-foreground shadow-sm',
      className
    )}
    {...props}
  />
));
Card.displayName = 'Card';
