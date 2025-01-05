import {
  type ComponentPropsWithoutRef,
  type ElementRef,
  forwardRef,
} from 'react';
import { DotIcon } from 'lucide-react';

export const OTPInputSeparator = forwardRef<
  ElementRef<'div'>,
  ComponentPropsWithoutRef<'div'>
>(({ ...props }, ref) => (
  <div ref={ref} role='separator' {...props}>
    <DotIcon />
  </div>
));
OTPInputSeparator.displayName = 'OTPInputSeparator';
