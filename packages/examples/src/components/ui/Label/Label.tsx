import {
  type ComponentPropsWithoutRef,
  type ElementRef,
  forwardRef,
} from 'react';
import { Label as LabelRoot } from '@radix-ui/react-label';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const labelVariants = cva(
  `text-sm font-medium leading-none peer-disabled:cursor-not-allowed
peer-disabled:opacity-70`
);

export const Label = forwardRef<
  ElementRef<typeof LabelRoot>,
  ComponentPropsWithoutRef<typeof LabelRoot> &
    VariantProps<typeof labelVariants>
>(({ className, ...props }, ref) => (
  <LabelRoot ref={ref} className={cn(labelVariants(), className)} {...props} />
));
Label.displayName = LabelRoot.displayName;
