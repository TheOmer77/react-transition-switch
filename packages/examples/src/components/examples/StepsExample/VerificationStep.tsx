import { forwardRef, useState, type ElementRef } from 'react';

import { CardContent, CardDescription, CardHeader } from '@/components/ui/Card';
import { Label } from '@/components/ui/Label';
import { OTPInput, OTPInputSlot } from '@/components/ui/OTPInput';

import { StepFooter } from './StepFooter';
import { StepTitle } from './StepTitle';
import type { StepProps } from './types';

const CODE_LENGTH = 6;

export const VerificationStep = forwardRef<ElementRef<'section'>, StepProps>(
  ({ onNextClick, onPrevClick, ...props }, ref) => {
    const [code, setCode] = useState('');

    return (
      <section {...props} ref={ref}>
        <CardHeader>
          <StepTitle>Just to be safe...</StepTitle>
          <CardDescription>
            We&apos;ve sent a verification code to your email - please enter it
            below.
          </CardDescription>
        </CardHeader>
        <CardContent className='space-y-2'>
          <Label htmlFor='code'>Verification Code</Label>
          <OTPInput maxLength={CODE_LENGTH} value={code} onChange={setCode}>
            {[...Array(CODE_LENGTH).keys()].map(idx => (
              <OTPInputSlot
                key={idx}
                index={idx}
                className='h-14 w-full max-w-14 text-2xl'
              />
            ))}
          </OTPInput>
        </CardContent>
        <StepFooter
          onNextClick={onNextClick}
          onPrevClick={onPrevClick}
          nextLabel='Verify'
        />
      </section>
    );
  }
);
VerificationStep.displayName = 'VerificationStep';
