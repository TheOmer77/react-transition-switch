import { forwardRef, type ElementRef } from 'react';

import { CardContent, CardDescription, CardHeader } from '@/components/ui/Card';
import { Input } from '@/components/ui/Input';
import { Label } from '@/components/ui/Label';
import { Textarea } from '@/components/ui/Textarea';

import { StepFooter } from './StepFooter';
import { StepTitle } from './StepTitle';
import type { StepProps } from './types';
import { AvatarInput } from './AvatarInput';

export const ProfileStep = forwardRef<ElementRef<'section'>, StepProps>(
  ({ onNextClick, onPrevClick, ...props }, ref) => (
    <section {...props} ref={ref}>
      <CardHeader>
        <StepTitle>Tell us about yourself</StepTitle>
        <CardDescription>
          Add some extra details to complete your profile.
        </CardDescription>
      </CardHeader>
      <CardContent className='flex grow flex-col gap-4 md:grow-0'>
        <AvatarInput />
        <div className='space-y-2'>
          <Label htmlFor='displayName'>Display Name</Label>
          <Input id='displayName' placeholder='Display name' required />
        </div>
        <div className='flex grow flex-col gap-2 md:grow-0'>
          <Label htmlFor='bio'>Bio</Label>
          <Textarea
            className='w-full grow md:h-20'
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
