import { type ComponentPropsWithoutRef, forwardRef, useState } from 'react';
import { TransitionSwitchItem } from 'react-transition-switch';

import { ScrollArea } from '@/components/ui/scroll-area';
import {
  Nav,
  type NavItemId,
  navItems,
  Search,
} from '@/components/examples/files';
import { FadeThrough } from '@/components/transitions/fade-through';
import { cn } from '@/lib/utils';

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
      <ScrollArea className='w-full [&>[data-radix-scroll-area-scrollbar]]:pb-16 md:[&>[data-radix-scroll-area-scrollbar]]:pb-0 [&>[data-radix-scroll-area-viewport]]:max-h-[calc(100dvh-4rem)]'>
        <FadeThrough
          value={activeSection}
          className='w-full [&_main]:w-full [&_main]:px-4 [&_main]:pb-16 md:[&_main]:pb-4'
        >
          {navItems.map(({ id, pageComponent }) => (
            <TransitionSwitchItem key={id} value={id}>
              {pageComponent}
            </TransitionSwitchItem>
          ))}
        </FadeThrough>
      </ScrollArea>
    </div>
  );
});
FilesExample.displayName = 'FilesExample';

export default FilesExample;
