import { forwardRef, type ElementRef } from 'react';

import type { StepProps } from './types';
import { Button } from '@/components/ui/Button';
import { CardContent, CardHeader, CardTitle } from '@/components/ui/Card';

export const WelcomeStep = forwardRef<
  ElementRef<'section'>,
  Omit<StepProps, 'onPrevClick'>
>(({ onNextClick, ...props }, ref) => (
  <section {...props} ref={ref}>
    <CardHeader>
      <CardTitle className='text-center text-3xl font-bold'>Welcome!</CardTitle>
    </CardHeader>
    <CardContent>
      <p className='mb-8 text-center text-muted-foreground'>
        We&apos;re glad to have you here. Let&apos;s setup your account, so you
        can join our community and start connecting with your friends!
      </p>
      <Button variant='primary' className='w-full' onClick={onNextClick}>
        Get Started
      </Button>
    </CardContent>
  </section>
));
WelcomeStep.displayName = 'WelcomeStep';
