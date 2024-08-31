import {
  forwardRef,
  useContext,
  type ComponentPropsWithoutRef,
  type ElementRef,
} from 'react';
import { OTPInputContext } from 'input-otp';

import { cn } from '@/lib/utils';

export const OTPInputSlot = forwardRef<
  ElementRef<'div'>,
  ComponentPropsWithoutRef<'div'> & { index: number }
>(({ index, className, ...props }, ref) => {
  const otpInputContext = useContext(OTPInputContext);
  const { char, hasFakeCaret, isActive } = otpInputContext.slots[index]!;

  return (
    <div
      ref={ref}
      className={cn(
        'relative flex size-10 items-center justify-center rounded-md border border-input bg-background text-sm shadow-sm transition-all [.group>&:not(:first-child)]:rounded-s-none [.group>&:not(:first-child)]:border-s-0 [.group>&:not(:last-child)]:rounded-e-none [.group>&]:shadow-none',
        isActive && 'z-10 ring-2 ring-ring ring-offset-background',
        className
      )}
      {...props}
    >
      {char}
      {hasFakeCaret && (
        <div className='pointer-events-none absolute inset-0 flex items-center justify-center'>
          <div className='animate-caret-blink h-4 w-px bg-foreground duration-1000' />
        </div>
      )}
    </div>
  );
});
OTPInputSlot.displayName = 'OTPInputSlot';
