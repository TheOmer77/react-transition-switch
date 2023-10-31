import type { ComponentPropsWithoutRef } from 'react';
import { cn } from 'utils/cn';

export const Button = ({
  className,
  children,
  ...props
}: ComponentPropsWithoutRef<'button'>) => (
  <button
    {...props}
    className={cn(
      `flex h-10 w-10 cursor-default items-center justify-center rounded
bg-slate-200 text-slate-800 enabled:active:bg-slate-300 disabled:bg-slate-50
disabled:text-slate-500 dark:bg-slate-800 dark:text-slate-200
dark:enabled:active:bg-slate-700 dark:disabled:bg-slate-900`,
      className
    )}
  >
    {children}
  </button>
);
