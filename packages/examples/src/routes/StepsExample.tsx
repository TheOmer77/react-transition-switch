import { forwardRef, useState, type ComponentPropsWithoutRef } from 'react';

import { TransitionSwitchItem } from 'react-transition-switch';
import { ExampleLogo } from '@/components/Logos';
import { SharedAxis } from '@/components/transitions/SharedAxis';
import {
  CredentialsStep,
  FinishStep,
  InterestsStep,
  ProfileStep,
  VerificationStep,
  WelcomeStep,
} from '@/components/examples/StepsExample';
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
        `grid grid-cols-1 grid-rows-[16rem,1fr] items-center justify-center transition-[grid-template-rows] duration-300 md:grid-cols-2 md:grid-rows-none`,
        activeIndex > 0 && 'grid-rows-[0,1fr]'
      )}
    >
      <div
        className={cn(
          `flex h-full w-full flex-col justify-between bg-[url(/boliviainteligente-_75VdeLT3BI-unsplash.jpg)] bg-cover bg-center p-4 [&>*]:shrink-0 [&>*]:transition-opacity`,
          activeIndex > 0 && '[&>*]:opacity-0 md:[&>*]:opacity-100'
        )}
      >
        <ExampleLogo
          className={cn('fill-primary-50 [&>.eyes]:fill-primary-700')}
        />
        <a
          className='self-end rounded-lg text-sm text-neutral-400'
          href='https://unsplash.com/photos/_75VdeLT3BI'
        >
          Photo by BoliviaInteligente on Unsplash
        </a>
      </div>
      <SharedAxis
        value={activeIndex.toString()}
        className='h-full w-full overflow-hidden bg-card [&>section>*]:mx-auto [&>section>*]:w-full sm:[&>section>*]:max-w-[25rem] [&>section]:flex [&>section]:h-full [&>section]:w-full [&>section]:flex-col md:[&>section]:justify-center'
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
