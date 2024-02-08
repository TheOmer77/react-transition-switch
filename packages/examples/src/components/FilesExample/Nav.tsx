import { navItems, type NavItemId } from './navItems';
import { FilesLogo } from '../Logos';
import { Button } from '@/components/ui/Button';
import { cn } from '@/lib/utils';

export const Nav = ({
  activeSection,
  onActiveSectionChange,
}: {
  activeSection: NavItemId;
  onActiveSectionChange: (section: NavItemId) => void;
}) => (
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
            className={cn(
              `h-full w-20 flex-col gap-2 text-xs md:w-full
md:flex-row md:justify-start md:gap-4 md:text-sm [&>svg]:text-base
md:[&>svg]:text-xl`,
              activeSection === id && 'bg-accent'
            )}
            onClick={() => onActiveSectionChange(id)}
          >
            <Icon className='shrink-0' />
            {label}
          </Button>
        </li>
      ))}
    </ul>
  </aside>
);
