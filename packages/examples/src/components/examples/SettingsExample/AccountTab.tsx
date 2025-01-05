import { type ComponentPropsWithoutRef, forwardRef } from 'react';

import {
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/Label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/Select';

export const AccountTab = forwardRef<
  HTMLDivElement,
  ComponentPropsWithoutRef<'div'>
>((props, ref) => (
  <div {...props} ref={ref}>
    <CardHeader>
      <CardTitle>Account Settings</CardTitle>
      <CardDescription>Manage your account settings here.</CardDescription>
    </CardHeader>
    <CardContent className='grid gap-8'>
      <div className='grid gap-2'>
        <Label htmlFor='name'>Name</Label>
        <Input id='name' placeholder='Your name' />
        <div className='text-sm text-muted-foreground'>
          This is the name that will be displayed on your public profile.
        </div>
      </div>
      <div className='grid gap-2'>
        <Label htmlFor='name'>Email</Label>
        <Input id='name' type='email' placeholder='someone@example.com' />
        <div className='text-sm text-muted-foreground'>
          This is the address we&apos;ll send spam emails to... Just kidding.
        </div>
      </div>
      <div className='grid gap-2'>
        <Label htmlFor='language'>Language</Label>
        <Select>
          <SelectTrigger>
            <SelectValue placeholder='Select language' />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value='en'>English</SelectItem>
            <SelectItem value='es'>Spanish</SelectItem>
            <SelectItem value='fr'>French</SelectItem>
            <SelectItem value='de'>German</SelectItem>
          </SelectContent>
        </Select>
        <div className='text-sm text-muted-foreground'>
          This is the language that will be used throughout the site.
        </div>
      </div>
    </CardContent>
  </div>
));
AccountTab.displayName = 'AccountTab';
