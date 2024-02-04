import { forwardRef, type ElementRef } from 'react';

import type { StepProps } from './types';
import {
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/Card';
import { Input } from '@/components/ui/Input';
import { Label } from '@/components/ui/Label';
import { StepFooter } from './StepFooter';

export const VerificationStep = forwardRef<ElementRef<'section'>, StepProps>(
  ({ onNextClick, onPrevClick, ...props }, ref) => (
    <section {...props} ref={ref}>
      <CardHeader>
        <CardTitle>Just to be safe...</CardTitle>
        <CardDescription>
          We&apos;ve sent a verification code to your email - please enter it
          below.
        </CardDescription>
      </CardHeader>
      <CardContent className='space-y-4'>
        <div className='space-y-2'>
          <Label htmlFor='code'>Verification Code</Label>
          <Input id='code' placeholder='Enter your code' required />
        </div>
      </CardContent>
      <StepFooter
        onNextClick={onNextClick}
        onPrevClick={onPrevClick}
        nextLabel='Verify'
      />
    </section>
  )
);
VerificationStep.displayName = 'VerificationStep';
