import { forwardRef, type ComponentPropsWithoutRef } from 'react';
import { Primitive } from '@radix-ui/react-primitive';

import { cn } from '@/lib/utils';

export type ButtonProps = ComponentPropsWithoutRef<typeof Primitive.button> & {
  variant?: 'default' | 'primary' | 'danger' | 'flat' | 'link';
  size?: 'sm' | 'md' | 'lg' | 'icon-sm' | 'icon-md' | 'icon-lg';
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'default', size = 'md', ...props }, ref) => {
    return (
      <Primitive.button
        {...props}
        ref={ref}
        className={cn(
          `inline-flex cursor-default items-center justify-center
whitespace-nowrap rounded-lg text-sm font-medium shadow-sm
shadow-neutral-950/20 transition-colors duration-75 focus-visible:outline-none
focus-visible:ring-2 focus-visible:ring-offset-2 active:duration-0
disabled:pointer-events-none disabled:opacity-50 data-[size=icon-lg]:h-10
data-[size=icon-md]:h-9 data-[size=icon-sm]:h-8 data-[size=lg]:h-10
data-[size=md]:h-9 data-[size=sm]:h-8 data-[size=icon-lg]:w-10
data-[size=icon-md]:w-9 data-[size=icon-sm]:w-8
data-[variant=link]:cursor-pointer data-[variant=danger]:bg-danger
data-[variant=default]:bg-white data-[variant=primary]:bg-primary
data-[size=lg]:px-8 data-[size=md]:px-4 data-[size=sm]:px-3
data-[variant=danger]:text-danger data-[variant=link]:text-neutral-900
data-[variant=primary]:text-primary
data-[variant=link]:underline-offset-4 data-[variant=flat]:shadow-none
data-[variant=link]:shadow-none data-[variant=danger]:hover:bg-danger-active
data-[variant=default]:hover:bg-neutral-50
data-[variant=flat]:hover:bg-neutral-500/20
data-[variant=primary]:hover:bg-primary-active
data-[variant=link]:hover:underline data-[variant=danger]:active:bg-danger-active
data-[variant=default]:active:bg-neutral-100
data-[variant=flat]:active:bg-neutral-500/30
data-[variant=primary]:active:bg-primary-active
data-[variant=default]:dark:bg-neutral-800
data-[variant=default]:dark:text-neutral-200
data-[variant=link]:dark:text-neutral-100
data-[variant=default]:dark:hover:bg-neutral-700
data-[variant=default]:dark:active:bg-neutral-600`,
          className
        )}
        data-variant={variant}
        data-size={size}
      />
    );
  }
);
Button.displayName = 'Button';
