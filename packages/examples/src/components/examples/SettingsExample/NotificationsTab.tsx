import { type ComponentPropsWithoutRef, forwardRef, useState } from 'react';
import type { LucideIcon } from 'lucide-react';
import { AtSignIcon, BellIcon, EyeOffIcon } from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { Switch } from '@/components/ui/Switch';
import { cn } from '@/lib/utils';

const options = [
  {
    id: 'all',
    title: 'Everything',
    description: 'Email digest & all activity.',
    icon: BellIcon,
  },
  {
    id: 'participating',
    title: 'Participating',
    description: 'Posts mentioning me and direct messages.',
    icon: AtSignIcon,
    selected: true,
  },
  {
    id: 'none',
    title: 'Nothing',
    description: 'Turn off all notifications.',
    icon: EyeOffIcon,
  },
] as const satisfies {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  selected?: boolean;
}[];

const switches = [
  { id: 'email-notifications', label: 'Email notifications' },
  { id: 'sms-notifications', label: 'SMS notifications' },
  { id: 'push-notifications', label: 'Push notifications' },
] as const satisfies { id: string; label: string }[];

export const NotificationsTab = forwardRef<
  HTMLDivElement,
  ComponentPropsWithoutRef<'div'>
>((props, ref) => {
  const [selectedOption, setSelectedOption] =
    useState<(typeof options)[number]['id']>('all');
  return (
    <div {...props} ref={ref}>
      <CardHeader>
        <CardTitle>Notifications</CardTitle>
        <CardDescription>
          Choose what you want to be notified about, and how.
        </CardDescription>
      </CardHeader>
      <CardContent className='grid gap-1'>
        {options.map(({ id, title, description, icon: Icon }) => (
          <Button
            key={id}
            variant='flat'
            onClick={() => setSelectedOption(id)}
            className={cn(
              `-mx-2 flex h-auto justify-start space-x-4 whitespace-normal py-2 text-start [&>svg]:text-xl`,
              selectedOption === id && 'bg-accent'
            )}
          >
            <Icon className='mt-px size-5 shrink-0' />
            <div className='grow space-y-1'>
              <p className='text-sm leading-none'>{title}</p>
              <p className='text-sm font-normal text-muted-foreground'>
                {description}
              </p>
            </div>
          </Button>
        ))}
        <Separator />
        {switches.map(({ id, label }) => (
          <div key={id} className='flex flex-row items-center py-2'>
            <Label htmlFor={id} className='grow'>
              {label}
            </Label>
            <Switch id={id} />
          </div>
        ))}
      </CardContent>
    </div>
  );
});
NotificationsTab.displayName = 'NotificationsTab';
