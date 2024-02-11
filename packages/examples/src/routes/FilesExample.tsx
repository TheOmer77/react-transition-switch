import { forwardRef, type ComponentPropsWithoutRef, useState } from 'react';

import { TransitionSwitchItem } from '@theomer77/react-transition-switch';
import {
  Nav,
  navItems,
  Search,
  type NavItemId,
} from '@/components/FilesExample';
import Fade from '@/components/Fade';
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
      <Fade
        value={activeSection}
        className='w-full [&>*]:max-h-full [&>*]:w-full [&>*]:overflow-y-auto
[&>*]:px-4 [&>*]:pb-20 md:[&>*]:pb-4'
      >
        {navItems.map(({ id, pageComponent }) => (
          <TransitionSwitchItem key={id} value={id}>
            {pageComponent}
          </TransitionSwitchItem>
        ))}
      </Fade>
    </div>
  );
});
FilesExample.displayName = 'FilesExample';

export default FilesExample;
