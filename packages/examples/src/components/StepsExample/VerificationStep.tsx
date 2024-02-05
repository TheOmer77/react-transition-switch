import { forwardRef, useState, type ElementRef } from 'react';

import { CardContent, CardDescription, CardHeader } from '@/components/ui/Card';
import { CodeInput } from '@/components/ui/CodeInput';
import { Label } from '@/components/ui/Label';
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
        <CardContent className='space-y-4'>
          <Label htmlFor='code'>Verification Code</Label>
          <CodeInput
            value={code}
            onChange={setCode}
            length={CODE_LENGTH}
            inputType='number'
            className='h-14 max-w-14 text-2xl'
          />
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
