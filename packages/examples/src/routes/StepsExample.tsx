import { forwardRef, useState, type ComponentPropsWithoutRef } from 'react';

import { TransitionSwitchItem } from '@theomer77/react-transition-switch';
import { ExampleLogo } from '@/components/Logos';
import SharedAxis from '@/components/SharedAxis';
import {
  CredentialsStep,
  FinishStep,
  InterestsStep,
  ProfileStep,
  VerificationStep,
  WelcomeStep,
} from '@/components/StepsExample';
import { cn } from '@/lib/utils';

const StepsExample = forwardRef<
  HTMLDivElement,
  ComponentPropsWithoutRef<'div'>
>((props, ref) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextStep = () => setActiveIndex(prev => prev + 1),
    prevStep = () => setActiveIndex(prev => prev - 1);

  return (
    <div
      {...props}
      ref={ref}
      className={cn(
        `grid grid-cols-1 grid-rows-[16rem,1fr] items-center justify-center
transition-[grid-template-rows] duration-300 md:grid-cols-2 md:grid-rows-none`,
        activeIndex > 0 && 'grid-rows-[0,1fr]'
      )}
    >
      <div
        className='flex h-full w-full flex-col justify-start
bg-[url(/boliviainteligente-_75VdeLT3BI-unsplash.jpg)] bg-cover bg-center p-4'
      >
        <ExampleLogo
          className={cn(
            `shrink-0 fill-primary-50 transition-opacity
[&>.eyes]:fill-primary-700`,
            activeIndex > 0 && 'opacity-0 md:opacity-100'
          )}
        />
      </div>
      <SharedAxis
        value={activeIndex.toString()}
        className='h-full w-full overflow-hidden bg-card [&>section>*]:mx-auto
[&>section>*]:w-full [&>section>*]:max-w-[25rem] [&>section]:flex [&>section]:h-full
[&>section]:w-full [&>section]:flex-col md:[&>section]:justify-center'
        autoAdjustWidth={false}
        autoAdjustHeight={false}
      >
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
      </SharedAxis>
    </div>
  );
});
StepsExample.displayName = 'StepsExample';

export default StepsExample;
