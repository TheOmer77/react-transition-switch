import { forwardRef, useState, type ComponentPropsWithoutRef } from 'react';

import { TransitionSwitchItem } from '@theomer77/react-transition-switch';
import { Card } from '@/components/ui/Card';
import SharedAxis from '@/components/SharedAxis';
import {
  CredentialsStep,
  FinishStep,
  InterestsStep,
  ProfileStep,
  VerificationStep,
  WelcomeStep,
} from '@/components/StepsExample';

const StepsExample = forwardRef<
  HTMLDivElement,
  ComponentPropsWithoutRef<'div'>
>((props, ref) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextStep = () => setActiveIndex(prev => prev + 1),
    prevStep = () => setActiveIndex(prev => prev - 1);

  return (
    <div {...props} ref={ref} className='flex items-center justify-center'>
      <SharedAxis
        value={activeIndex.toString()}
        className='w-[calc(100dvw-2rem)] max-w-sm overflow-hidden [&>section]:w-full'
        autoAdjustWidth={false}
        asChild
      >
        <Card>
          <TransitionSwitchItem value='0'>
            <WelcomeStep onNextClick={nextStep} />
          </TransitionSwitchItem>
          <TransitionSwitchItem value='1'>
            <CredentialsStep onNextClick={nextStep} onPrevClick={prevStep} />
          </TransitionSwitchItem>
          <TransitionSwitchItem value='2'>
            <VerificationStep onNextClick={nextStep} onPrevClick={prevStep} />
          </TransitionSwitchItem>
          <TransitionSwitchItem value='3'>
            <ProfileStep onNextClick={nextStep} onPrevClick={prevStep} />
          </TransitionSwitchItem>
          <TransitionSwitchItem value='4'>
            <InterestsStep onNextClick={nextStep} onPrevClick={prevStep} />
          </TransitionSwitchItem>
          <TransitionSwitchItem value='5'>
            <FinishStep />
          </TransitionSwitchItem>
        </Card>
      </SharedAxis>
    </div>
  );
});
StepsExample.displayName = 'StepsExample';

export default StepsExample;
