import {
  forwardRef,
  type ComponentPropsWithoutRef,
  type ElementRef,
} from 'react';

import { cn } from '@/lib/utils';

export const OTPInputGroup = forwardRef<
  ElementRef<'div'>,
  ComponentPropsWithoutRef<'div'>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn('group flex items-center rounded-md shadow-sm', className)}
    {...props}
  />
));
OTPInputGroup.displayName = 'OTPInputGroup';
