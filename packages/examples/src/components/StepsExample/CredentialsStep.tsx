import { forwardRef, type ElementRef } from 'react';

import { CardContent, CardDescription, CardHeader } from '@/components/ui/Card';
import { Input } from '@/components/ui/Input';
import { Label } from '@/components/ui/Label';
import { StepFooter } from './StepFooter';
import { StepTitle } from './StepTitle';
import type { StepProps } from './types';

export const CredentialsStep = forwardRef<ElementRef<'section'>, StepProps>(
  ({ onNextClick, onPrevClick, ...props }, ref) => (
    <section {...props} ref={ref}>
      <CardHeader>
        <StepTitle>Let&apos;s create your account</StepTitle>
        <CardDescription>Start by entering your login details.</CardDescription>
      </CardHeader>
      <CardContent className='space-y-4'>
        <div className='space-y-2'>
          <Label htmlFor='email'>Email</Label>
          <Input id='email' placeholder='Email' required type='email' />
        </div>
        <div className='space-y-2'>
          <Label htmlFor='password'>Password</Label>
          <Input
            id='password'
            placeholder='Password'
            type='password'
            required
          />
        </div>
        <div className='space-y-2'>
          <Label htmlFor='password'>Repeat password</Label>
          <Input
            id='password'
            placeholder='Repeat password'
            required
            type='password'
          />
        </div>
      </CardContent>
      <StepFooter onNextClick={onNextClick} onPrevClick={onPrevClick} />
    </section>
  )
);
CredentialsStep.displayName = 'CredentialsStep';
