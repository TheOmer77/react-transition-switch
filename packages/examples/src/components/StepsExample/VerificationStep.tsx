import { forwardRef, useState, type ElementRef } from 'react';

import {
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/Card';
import { CodeInput } from '@/components/ui/CodeInput';
import { Label } from '@/components/ui/Label';
import { StepFooter } from './StepFooter';
import type { StepProps } from './types';

const CODE_LENGTH = 6;

export const VerificationStep = forwardRef<ElementRef<'section'>, StepProps>(
  ({ onNextClick, onPrevClick, ...props }, ref) => {
    const [code, setCode] = useState('');

    return (
      <section {...props} ref={ref}>
        <CardHeader>
          <CardTitle>Just to be safe...</CardTitle>
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
          />
        </CardContent>
        <StepFooter
          onNextClick={onNextClick}
          onPrevClick={onPrevClick}
          nextLabel='Verify'
          nextDisabled={code.length < CODE_LENGTH}
        />
      </section>
    );
  }
);
VerificationStep.displayName = 'VerificationStep';
