import { forwardRef, type ComponentPropsWithoutRef } from 'react';
import {
  HomeIcon,
  SearchIcon,
  Share2Icon,
  StarIcon,
  type LucideIcon,
} from 'lucide-react';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { FilesLogo } from '@/components/Logos';

const navItems = [
  { id: 'home', label: 'Home', icon: HomeIcon },
  { id: 'favorites', label: 'Favorites', icon: StarIcon },
  { id: 'shared', label: 'Shared', icon: Share2Icon },
] satisfies {
  id: string;
  label: string;
  icon: LucideIcon;
}[];

const FilesExample = forwardRef<
  HTMLDivElement,
  ComponentPropsWithoutRef<'div'>
>(({ className, ...props }, ref) => {
  return (
    <div
      {...props}
      ref={ref}
      className={cn('px-4 pb-4 pt-20 md:ps-[21rem]', className)}
    >
      <aside
        className='fixed bottom-0 start-0 h-20 w-full bg-card
text-card-foreground md:h-full md:w-80'
      >
        <div className='hidden h-16 w-full px-4 md:flex'>
          <FilesLogo />
        </div>
        <ul
          className='flex h-full flex-row justify-evenly gap-px p-2 md:flex-col
md:justify-start md:px-4'
        >
          {navItems.map(({ id, label, icon: Icon }) => (
            <li key={id}>
              <Button
                variant='flat'
                className='h-full w-20 flex-col gap-2 text-xs md:w-full
md:flex-row md:justify-start md:gap-4 md:text-sm [&>svg]:text-base
md:[&>svg]:text-xl'
              >
                <Icon className='shrink-0' />
                {label}
              </Button>
            </li>
          ))}
        </ul>
      </aside>
      <div
        className='fixed start-0 top-0 flex h-16 w-full items-center
justify-center px-4 md:start-80 md:w-[calc(100%-20rem)]'
      >
        <div className='relative w-full md:max-w-sm'>
          <Input placeholder='Search files...' className='ps-10' />
          <SearchIcon
            className='pointer-events-none absolute inset-y-2.5 start-3.5
text-muted-foreground'
          />
        </div>
      </div>
      Actual content of this files example TBD
    </div>
  );
});
FilesExample.displayName = 'FilesExample';

export default FilesExample;
