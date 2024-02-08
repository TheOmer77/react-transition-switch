import {
  forwardRef,
  type ComponentPropsWithoutRef,
  type ElementRef,
} from 'react';

export const SharedPage = forwardRef<
  ElementRef<'main'>,
  ComponentPropsWithoutRef<'main'>
>(({ ...props }, ref) => (
  <main {...props} ref={ref}>
    Shared
  </main>
));
SharedPage.displayName = 'SharedPage';
