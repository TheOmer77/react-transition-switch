import { forwardRef, type ComponentPropsWithoutRef } from 'react';
import { CheckIcon } from 'lucide-react';

import { cn } from '@/lib/utils';

export type CheckboxProps = Omit<
  ComponentPropsWithoutRef<'input'>,
  'type' | 'value' | 'onChange'
> & { onCheckedChange?: (checked: boolean) => void };

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ checked, onCheckedChange, className, style, ...props }, ref) => {
    return (
      <div className='relative h-5 w-5'>
        <input
          {...props}
          ref={ref}
          type='checkbox'
          checked={checked}
          onChange={e => onCheckedChange?.(e.target.checked)}
          className='peer h-full w-full opacity-0'
        />
        <div
          className={cn(
            `pointer-events-none absolute start-0 top-0 flex h-full w-full
items-center justify-center rounded-md bg-background text-lg
text-primary-foreground shadow-sm ring-[1.5px] ring-inset ring-border
transition-[background-color,box-shadow] duration-75 state-layer
peer-checked:bg-primary peer-checked:ring-primary
peer-hover:state-layer-foreground/10
peer-checked:peer-hover:state-layer-primary-active/50 peer-active:bg-neutral-100
peer-active:duration-0 peer-checked:peer-active:bg-primary-active
peer-checked:peer-active:ring-primary-active dark:bg-card
dark:peer-active:bg-neutral-800/60 [&>svg]:z-10 [&>svg]:opacity-0
[&>svg]:transition-opacity [&>svg]:duration-75 [&>svg]:[stroke-dasharray:2em]
[&>svg]:[stroke-dashoffset:0] peer-checked:[&>svg]:animate-checkbox-check
peer-checked:[&>svg]:opacity-100`,
            className
          )}
          style={style}
        >
          <CheckIcon />
        </div>
      </div>
    );
  }
);
Checkbox.displayName = 'Checkbox';
