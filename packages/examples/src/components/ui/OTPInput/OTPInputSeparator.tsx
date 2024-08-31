import {
  forwardRef,
  type ComponentPropsWithoutRef,
  type ElementRef,
} from 'react';
import { Dot } from 'lucide-react';

export const OTPInputSeparator = forwardRef<
  ElementRef<'div'>,
  ComponentPropsWithoutRef<'div'>
>(({ ...props }, ref) => (
  <div ref={ref} role='separator' {...props}>
    <Dot />
  </div>
));
OTPInputSeparator.displayName = 'OTPInputSeparator';
