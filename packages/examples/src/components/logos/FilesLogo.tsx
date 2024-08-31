import { forwardRef, type ComponentPropsWithoutRef } from 'react';
import { BoxIcon } from 'lucide-react';

import { cn } from '@/lib/utils';

export const FilesLogo = forwardRef<
  HTMLDivElement,
  ComponentPropsWithoutRef<'div'>
>(({ className, ...props }, ref) => (
  <div
    {...props}
    ref={ref}
    className={cn('flex select-none flex-row items-center gap-2', className)}
  >
    <BoxIcon className='rounded-lg bg-primary p-1 text-5xl text-primary-foreground' />
    <h1 className='text-2xl font-bold tracking-tight'>FileBox</h1>
  </div>
));
FilesLogo.displayName = 'FilesLogo';
