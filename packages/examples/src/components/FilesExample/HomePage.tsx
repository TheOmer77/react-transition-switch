import {
  forwardRef,
  type ComponentPropsWithoutRef,
  type ElementRef,
} from 'react';

export const HomePage = forwardRef<
  ElementRef<'main'>,
  ComponentPropsWithoutRef<'main'>
>(({ ...props }, ref) => (
  <main {...props} ref={ref}>
    Home
  </main>
));
HomePage.displayName = 'HomePage';
