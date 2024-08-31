import { forwardRef, type ComponentPropsWithoutRef } from 'react';
import { Link } from 'react-router-dom';
import {
  CircleUserIcon,
  FolderIcon,
  ImageIcon,
  SettingsIcon,
  type LucideIcon,
} from 'lucide-react';

import { Button } from '@/components/ui/Button';

const links = [
  {
    title: 'Settings',
    description: 'Simple fade animation',
    href: '/settings',
    icon: SettingsIcon,
  },
  {
    title: 'Files',
    description: 'Material fade through',
    href: '/files',
    icon: FolderIcon,
  },
  {
    title: 'Photos',
    description: 'Simple slide animation',
    href: '/photos',
    icon: ImageIcon,
  },
  {
    title: 'Steps',
    description: 'Material shared axis',
    href: '/steps',
    icon: CircleUserIcon,
  },
] as const satisfies {
  title: string;
  description: string;
  href: string;
  icon: LucideIcon;
}[];

const Root = forwardRef<HTMLDivElement, ComponentPropsWithoutRef<'div'>>(
  (props, ref) => (
    <div
      {...props}
      ref={ref}
      className='flex h-full flex-col items-center justify-center [&>*]:w-[calc(100dvw-2rem)] [&>*]:max-w-lg'
    >
      <header className='select-none'>
        <h1 className='mb-2 text-4xl font-extrabold tracking-tight sm:text-5xl'>
          React Transition Switch
        </h1>
        <p className='mb-4 text-base text-muted-foreground sm:text-xl'>
          A React component to switch between child components with CSS
          animations.
        </p>
        <div className='flex flex-row gap-2 [&>*]:cursor-pointer [&>*]:text-base'>
          <Button variant='primary' size='lg' asChild>
            <a href='https://github.com/TheOmer77/react-transition-switch#installation'>
              Get started
            </a>
          </Button>
          <Button size='lg' asChild>
            <a href='https://github.com/TheOmer77/react-transition-switch'>
              GitHub
            </a>
          </Button>
        </div>
      </header>

      <h2 className='mt-10 pb-2 text-3xl font-semibold tracking-tight transition-colors'>
        Examples
      </h2>
      <div className='grid grid-cols-1 flex-col gap-px md:grid-cols-2'>
        {links.map(({ title, description, href, icon: Icon }, i) => (
          <Button
            key={i}
            asChild
            variant='flat'
            className='h-auto cursor-pointer justify-start py-2 text-start text-base font-normal [&>svg]:size-6'
          >
            <Link to={href}>
              <Icon className='me-4' />
              <div className='[&>span]:block'>
                <span className='text-base font-medium'>{title}</span>
                <span className='text-sm text-muted-foreground sm:text-base'>
                  {description}
                </span>
              </div>
            </Link>
          </Button>
        ))}
      </div>
    </div>
  )
);
Root.displayName = 'Root';

export default Root;
