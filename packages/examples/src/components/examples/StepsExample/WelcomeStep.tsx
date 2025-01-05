import { type ElementRef, forwardRef } from 'react';

import { Button } from '@/components/ui/button';
import {
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/Card';

import type { StepProps } from './types';

export const WelcomeStep = forwardRef<
  ElementRef<'section'>,
  Omit<StepProps, 'onPrevClick'>
>(({ onNextClick, ...props }, ref) => (
  <section {...props} ref={ref}>
    <CardHeader>
      <CardTitle className='text-3xl font-bold'>Welcome!</CardTitle>
      <CardDescription className='text-base'>
        We&apos;re glad to have you here. Let&apos;s setup your account, so you
        can join our community and start connecting with your friends!
      </CardDescription>
    </CardHeader>
    <CardFooter className='mt-auto w-full md:mt-0'>
      <Button variant='primary' className='w-full' onClick={onNextClick}>
        Get Started
      </Button>
    </CardFooter>
  </section>
));
WelcomeStep.displayName = 'WelcomeStep';
