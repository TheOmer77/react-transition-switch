import { forwardRef, type ComponentPropsWithoutRef } from 'react';

import { cn } from '@/lib/utils';

export const Table = forwardRef<
  HTMLTableElement,
  ComponentPropsWithoutRef<'table'>
>(({ className, ...props }, ref) => (
  <div className='relative w-full overflow-auto'>
    <table
      ref={ref}
      className={cn('w-full caption-bottom text-sm', className)}
      {...props}
    />
  </div>
));
Table.displayName = 'Table';
