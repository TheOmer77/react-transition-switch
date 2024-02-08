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
      className={cn('px-4 pb-4 pt-20 md:ps-[21rem]', className)}
    >
      <Nav
        activeSection={activeSection}
        onActiveSectionChange={setActiveSection}
      />
      <Search />
      <Fade value={activeSection} autoAdjustHeight>
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
