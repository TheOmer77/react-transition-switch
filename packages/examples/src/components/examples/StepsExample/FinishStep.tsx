import {
  forwardRef,
  type ElementRef,
  type ComponentPropsWithoutRef,
} from 'react';
import { useNavigate } from 'react-router-dom';

import { Button } from '@/components/ui/Button';
import {
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/Card';
import { cn } from '@/lib/utils';

export const FinishStep = forwardRef<
  ElementRef<'section'>,
  ComponentPropsWithoutRef<'section'>
>(({ className, ...props }, ref) => {
  const navigate = useNavigate();
  return (
    <section {...props} ref={ref} className={cn('justify-center', className)}>
      <CardHeader>
        <CardTitle className='text-3xl font-bold'>Done!</CardTitle>
        <CardDescription className='text-base'>
          Your account has been successfully created. We can&apos;t wait for you
          to join us!
        </CardDescription>
      </CardHeader>
      <CardFooter>
        <Button
          variant='primary'
          className='w-full'
          onClick={() => navigate(-1)}
        >
          Go to Home
        </Button>
      </CardFooter>
    </section>
  );
});
FinishStep.displayName = 'FinishStep';
