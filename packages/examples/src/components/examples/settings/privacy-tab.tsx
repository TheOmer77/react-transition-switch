import { type ComponentPropsWithoutRef, forwardRef } from 'react';

import {
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

export const PrivacyTab = forwardRef<
  HTMLDivElement,
  ComponentPropsWithoutRef<'div'>
>((props, ref) => (
  <div {...props} ref={ref}>
    <CardHeader>
      <CardTitle>Privacy Settings</CardTitle>
      <CardDescription>Manage your privacy settings here.</CardDescription>
    </CardHeader>
    <CardContent className='grid gap-8'>
      <div className='grid gap-2'>
        <Label htmlFor='location'>Location</Label>
        <Select defaultValue='public'>
          <SelectTrigger>
            <SelectValue placeholder='Select location' />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value='public'>Public</SelectItem>
            <SelectItem value='private'>Private</SelectItem>
          </SelectContent>
        </Select>
        <div className='text-sm text-muted-foreground'>
          Choose who can see your location.
        </div>
      </div>
      <div className='grid gap-2'>
        <Label htmlFor='email'>Email</Label>
        <Select defaultValue='public'>
          <SelectTrigger>
            <SelectValue placeholder='Select email' />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value='public'>Public</SelectItem>
            <SelectItem value='private'>Private</SelectItem>
          </SelectContent>
        </Select>
        <div className='text-sm text-muted-foreground'>
          Choose who can see your email.
        </div>
      </div>
    </CardContent>
  </div>
));
PrivacyTab.displayName = 'PrivacyTab';
