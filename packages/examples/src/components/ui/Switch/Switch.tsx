import {
  type ComponentPropsWithoutRef,
  type ElementRef,
  forwardRef,
} from 'react';
import { Switch as SwitchRoot, SwitchThumb } from '@radix-ui/react-switch';

import { cn } from '@/lib/utils';

export const Switch = forwardRef<
  ElementRef<typeof SwitchRoot>,
  ComponentPropsWithoutRef<typeof SwitchRoot>
>(({ className, ...props }, ref) => (
  <SwitchRoot
    className={cn(
      'peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input',
      className
    )}
    {...props}
    ref={ref}
  >
    <SwitchThumb
      className={cn(
        'pointer-events-none block size-5 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0'
      )}
    />
  </SwitchRoot>
));
Switch.displayName = SwitchRoot.displayName;
