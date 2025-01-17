import {
  type ComponentPropsWithoutRef,
  type ElementRef,
  forwardRef,
} from 'react';
import { Item, ItemIndicator, ItemText } from '@radix-ui/react-select';
import { CheckIcon } from 'lucide-react';

import { cn } from '@/lib/utils';

export const SelectItem = forwardRef<
  ElementRef<typeof Item>,
  ComponentPropsWithoutRef<typeof Item>
>(({ className, children, ...props }, ref) => (
  <Item
    ref={ref}
    className={cn(
      'relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pe-2 ps-8 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
      className
    )}
    {...props}
  >
    <span className='absolute start-2 flex size-3.5 items-center justify-center'>
      <ItemIndicator>
        <CheckIcon className='text-base' />
      </ItemIndicator>
    </span>
    <ItemText>{children}</ItemText>
  </Item>
));
SelectItem.displayName = Item.displayName;
