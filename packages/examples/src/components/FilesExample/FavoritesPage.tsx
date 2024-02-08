import {
  forwardRef,
  type ComponentPropsWithoutRef,
  type ElementRef,
} from 'react';

export const FavoritesPage = forwardRef<
  ElementRef<'main'>,
  ComponentPropsWithoutRef<'main'>
>(({ ...props }, ref) => (
  <main {...props} ref={ref}>
    Favorites
  </main>
));
FavoritesPage.displayName = 'FavoritesPage';
