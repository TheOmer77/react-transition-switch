import {
  type ComponentPropsWithoutRef,
  type ElementRef,
  forwardRef,
} from 'react';
import { Label } from '@radix-ui/react-select';

import { cn } from '@/lib/utils';

export const SelectLabel = forwardRef<
  ElementRef<typeof Label>,
  ComponentPropsWithoutRef<typeof Label>
>(({ className, ...props }, ref) => (
  <Label
    ref={ref}
    className={cn('py-1.5 pe-2 ps-8 text-sm font-semibold', className)}
    {...props}
  />
));
SelectLabel.displayName = Label.displayName;
