import { cva } from 'class-variance-authority';

export const buttonVariants = cva(
  `inline-flex cursor-default items-center justify-center whitespace-nowrap
rounded-md text-sm font-medium transition-colors state-layer
hover:state-layer-muted/30 focus-visible:outline-none focus-visible:ring-1
focus-visible:ring-ring active:bg-muted/30 active:duration-0
disabled:pointer-events-none disabled:text-muted [&>*]:z-10 [&>svg]:text-base`,
  {
    variants: {
      variant: {
        default: `bg-background shadow-sm shadow-neutral-950/20
dark:bg-neutral-800 dark:active:bg-neutral-700`,
        flat: 'hover:bg-accent hover:text-accent-foreground',
      },
      size: {
        sm: 'h-8 px-3 text-xs [&>svg]:text-sm',
        md: 'h-9 px-4 py-2',
        lg: 'h-10 px-8',
        'icon-sm': 'h-8 w-8 text-xs [&>svg]:text-sm',
        'icon-md': 'h-9 w-9',
        'icon-lg': 'h-10 w-10',
      },
    },
    defaultVariants: { variant: 'default', size: 'md' },
  }
);
