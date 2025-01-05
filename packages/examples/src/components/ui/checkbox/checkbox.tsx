import { type ComponentPropsWithoutRef, forwardRef } from 'react';
import { CheckIcon } from 'lucide-react';

import { cn } from '@/lib/utils';

export type CheckboxProps = Omit<
  ComponentPropsWithoutRef<'input'>,
  'type' | 'value' | 'onChange'
> & { onCheckedChange?: (checked: boolean) => void };

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ checked, onCheckedChange, className, ...props }, ref) => (
    <div className='relative inline-flex'>
      <input
        {...props}
        ref={ref}
        type='checkbox'
        checked={checked}
        onChange={e => onCheckedChange?.(e.target.checked)}
        className={cn(
          `h-5 w-5 appearance-none content-center rounded-md bg-background shadow-sm ring-[0.0625rem] ring-inset ring-input transition-[background-color,box-shadow] duration-75 state-layer checked:bg-primary checked:ring-primary hover:state-layer-foreground/10 checked:hover:state-layer-primary-active/50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary active:bg-neutral-100 active:ring-input-active active:duration-0 checked:active:bg-primary-active checked:active:ring-primary-active dark:bg-card dark:active:bg-neutral-800 [&~svg]:pointer-events-none [&~svg]:absolute [&~svg]:start-[0.0625rem] [&~svg]:top-[0.0625rem] [&~svg]:z-10 [&~svg]:text-lg [&~svg]:text-primary-foreground [&~svg]:opacity-0 [&~svg]:transition-opacity [&~svg]:duration-75 [&~svg]:[stroke-dasharray:22.627416610717773px] [&~svg]:[stroke-dashoffset:0] [&~svg]:checked:animate-checkbox-check [&~svg]:checked:opacity-100`,
          className
        )}
      />
      <CheckIcon />
    </div>
  )
);
Checkbox.displayName = 'Checkbox';
