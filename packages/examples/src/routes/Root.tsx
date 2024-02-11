import { forwardRef, type ComponentPropsWithoutRef } from 'react';
import { Link } from 'react-router-dom';

import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';

const links = [
  {
    title: 'Simple example 1',
    description: 'Simple fade animation',
    href: '/simple1',
  },
  {
    title: 'Simple example 2',
    description: 'Not done yet!',
    href: '/simple2',
  },
  {
    title: 'Directional example 1',
    description: 'Simple slide animation',
    href: '/directional1',
  },
  {
    title: 'Directional example 2',
    description: 'Material design shared axis',
    href: '/directional2',
  },
] as const satisfies { title: string; description: string; href: string }[];

const Root = forwardRef<HTMLDivElement, ComponentPropsWithoutRef<'div'>>(
  (props, ref) => (
    <div
      {...props}
      ref={ref}
      className='flex h-full flex-col items-center justify-center'
    >
      <h1
        className='mb-4 flex w-[calc(100dvw-2rem)] max-w-sm select-none
text-4xl font-bold tracking-tight'
      >
        React Transition Switch
      </h1>

      <Card className='flex w-[calc(100dvw-2rem)] max-w-sm flex-col gap-px p-2'>
        {links.map(({ title, description, href }, i) => (
          <Button
            key={i}
            asChild
            variant='flat'
            className='h-auto cursor-pointer flex-col items-start py-2
text-start text-base font-normal'
          >
            <Link to={href}>
              <span className='text-base font-medium'>{title}</span>
              <span className='text-sm text-muted-foreground'>
                {description}
              </span>
            </Link>
          </Button>
        ))}
      </Card>
    </div>
  )
);
Root.displayName = 'Root';

export default Root;
