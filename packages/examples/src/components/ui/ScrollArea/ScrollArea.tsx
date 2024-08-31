import {
  forwardRef,
  type ComponentPropsWithoutRef,
  type ElementRef,
} from 'react';
import {
  ScrollArea as ScrollAreaRoot,
  ScrollAreaCorner,
  ScrollAreaViewport,
} from '@radix-ui/react-scroll-area';

import { cn } from '@/lib/utils';

import { ScrollBar } from './ScrollBar';

export const ScrollArea = forwardRef<
  ElementRef<typeof ScrollAreaRoot>,
  ComponentPropsWithoutRef<typeof ScrollAreaRoot>
>(({ className, children, ...props }, ref) => (
  <ScrollAreaRoot
    ref={ref}
    className={cn('relative overflow-hidden', className)}
    {...props}
  >
    <ScrollAreaViewport className='h-full w-full rounded-[inherit]'>
      {children}
    </ScrollAreaViewport>
    <ScrollBar />
    <ScrollAreaCorner />
  </ScrollAreaRoot>
));
ScrollArea.displayName = ScrollAreaRoot.displayName;
