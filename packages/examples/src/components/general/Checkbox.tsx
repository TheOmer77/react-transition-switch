import type { ComponentPropsWithoutRef } from 'react';
import { cn } from 'utils/cn';

export const Checkbox = ({
  id,
  label,
  className,
  ...props
}: Omit<ComponentPropsWithoutRef<'input'>, 'type'> & { label: string }) => (
  <div className='flex select-none flex-row items-center gap-1'>
    <input
      {...props}
      type='checkbox'
      id={id}
      className={cn('h-4 w-4 accent-blue-600 dark:accent-blue-300', className)}
    />
    {label && <label htmlFor={id}>{label}</label>}
  </div>
);
