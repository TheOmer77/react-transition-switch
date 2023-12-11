import type { ComponentPropsWithoutRef } from 'react';
import { cn } from 'utils/cn';

export const Radio = ({
  id,
  label,
  className,
  ...props
}: Omit<ComponentPropsWithoutRef<'input'>, 'type'> & { label: string }) => (
  <div className='flex select-none flex-row items-center gap-1'>
    <input
      {...props}
      id={id}
      type='radio'
      className={cn(
        'h-4 w-4 accent-primary-600 dark:accent-primary-300',
        className
      )}
    />
    {label && <label htmlFor={id}>{label}</label>}
  </div>
);
