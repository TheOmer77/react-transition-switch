import {
  forwardRef,
  type ComponentPropsWithoutRef,
  type ElementRef,
} from 'react';
import {
  ScrollAreaScrollbar,
  ScrollAreaThumb,
} from '@radix-ui/react-scroll-area';

import { cn } from '@/lib/utils';

export const ScrollBar = forwardRef<
  ElementRef<typeof ScrollAreaScrollbar>,
  ComponentPropsWithoutRef<typeof ScrollAreaScrollbar>
>(({ className, orientation = 'vertical', ...props }, ref) => (
  <ScrollAreaScrollbar
    ref={ref}
    orientation={orientation}
    data-radix-scroll-area-scrollbar=''
    className={cn(
      'flex touch-none select-none transition-colors',
      orientation === 'vertical' &&
        'h-full w-2.5 border-l border-l-transparent p-px',
      orientation === 'horizontal' &&
        'h-2.5 flex-col border-t border-t-transparent p-px',
      className
    )}
    {...props}
  >
    <ScrollAreaThumb className='relative flex-1 rounded-full bg-border' />
  </ScrollAreaScrollbar>
));
ScrollBar.displayName = ScrollAreaScrollbar.displayName;
