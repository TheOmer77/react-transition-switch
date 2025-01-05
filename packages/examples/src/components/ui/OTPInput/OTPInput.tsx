import {
  type ComponentPropsWithoutRef,
  type ElementRef,
  forwardRef,
} from 'react';
import { OTPInput as OTPInputRoot } from 'input-otp';

import { cn } from '@/lib/utils';

export const OTPInput = forwardRef<
  ElementRef<typeof OTPInputRoot>,
  ComponentPropsWithoutRef<typeof OTPInputRoot>
>(({ className, containerClassName, ...props }, ref) => (
  <OTPInputRoot
    ref={ref}
    containerClassName={cn(
      'flex items-center gap-1 has-[:disabled]:opacity-50',
      containerClassName
    )}
    className={cn('disabled:cursor-not-allowed', className)}
    {...props}
  />
));
OTPInput.displayName = 'OTPInput';
