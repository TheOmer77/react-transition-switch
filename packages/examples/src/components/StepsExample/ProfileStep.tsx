import { forwardRef, type ElementRef } from 'react';

import { StepFooter } from './StepFooter';
import type { StepProps } from './types';
import {
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/Card';
import { Input } from '@/components/ui/Input';
import { Label } from '@/components/ui/Label';
import { Textarea } from '@/components/ui/Textarea';

export const ProfileStep = forwardRef<ElementRef<'section'>, StepProps>(
  ({ onNextClick, onPrevClick, ...props }, ref) => (
    <section {...props} ref={ref}>
      <CardHeader>
        <CardTitle>Tell us about yourself</CardTitle>
        <CardDescription>
          Add some extra details to complete your profile.
        </CardDescription>
      </CardHeader>
      <CardContent className='space-y-4'>
        <div className='space-y-2'>
          <Label htmlFor='displayName'>Display Name</Label>
          <Input id='displayName' placeholder='Display name' required />
        </div>
        <div className='space-y-2'>
          <Label htmlFor='bio'>Bio</Label>
          <Textarea
            className='h-20 w-full'
            id='bio'
            placeholder='Write a bit about yourself'
            required
          />
        </div>
      </CardContent>
      <StepFooter onNextClick={onNextClick} onPrevClick={onPrevClick} />
    </section>
  )
);
ProfileStep.displayName = 'ProfileStep';
