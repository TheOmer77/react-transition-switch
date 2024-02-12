import { forwardRef, type ComponentPropsWithoutRef, useState } from 'react';

import { TransitionSwitchItem } from '@theomer77/react-transition-switch';
import {
  Nav,
  navItems,
  Search,
  type NavItemId,
} from '@/components/FilesExample';
import FadeThrough from '@/components/FadeThrough';
import { cn } from '@/lib/utils';
import { ScrollArea } from '@/components/ui/ScrollArea';

const FilesExample = forwardRef<
  HTMLDivElement,
  ComponentPropsWithoutRef<'div'>
>(({ className, ...props }, ref) => {
  const [activeSection, setActiveSection] = useState<NavItemId>('home');

  return (
    <div
      {...props}
      ref={ref}
      className={cn('grid grid-rows-[auto,1fr] md:ps-80', className)}
    >
      <Nav
        activeSection={activeSection}
        onActiveSectionChange={setActiveSection}
      />
      <Search />
      <FadeThrough
        value={activeSection}
        className='w-full [&_main]:px-4 [&_main]:pb-20 md:[&_main]:pb-4'
      >
        {navItems.map(({ id, pageComponent }) => (
          <TransitionSwitchItem key={id} value={id}>
            <ScrollArea
              className='w-full [&>[data-radix-scroll-area-scrollbar]]:z-50
[&>[data-radix-scroll-area-viewport]]:max-h-[calc(100dvh-4rem)]'
            >
              {pageComponent}
            </ScrollArea>
          </TransitionSwitchItem>
        ))}
      </FadeThrough>
    </div>
  );
});
FilesExample.displayName = 'FilesExample';

export default FilesExample;
