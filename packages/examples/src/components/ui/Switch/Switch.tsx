import {
  forwardRef,
  type ComponentPropsWithoutRef,
  type ElementRef,
} from 'react';
import { Switch as SwitchRoot, SwitchThumb } from '@radix-ui/react-switch';

import { cn } from '@/lib/utils';

export const Switch = forwardRef<
  ElementRef<typeof SwitchRoot>,
  ComponentPropsWithoutRef<typeof SwitchRoot>
>(({ className, ...props }, ref) => (
  <SwitchRoot
    className={cn(
      `peer inline-flex h-5 w-9 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input`,
      className
    )}
    {...props}
    ref={ref}
  >
    <SwitchThumb
      className={cn(
        `pointer-events-none block h-4 w-4 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-4 data-[state=unchecked]:translate-x-0`
      )}
    />
  </SwitchRoot>
));
Switch.displayName = SwitchRoot.displayName;
