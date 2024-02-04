import {
  forwardRef,
  type ElementRef,
  type ComponentPropsWithoutRef,
} from 'react';
import { useNavigate } from 'react-router-dom';

import { Button } from '@/components/ui/Button';
import { CardContent, CardHeader, CardTitle } from '@/components/ui/Card';

export const FinishStep = forwardRef<
  ElementRef<'section'>,
  ComponentPropsWithoutRef<'section'>
>(({ ...props }, ref) => {
  const navigate = useNavigate();
  return (
    <section {...props} ref={ref}>
      <CardHeader>
        <CardTitle className='text-center text-2xl font-bold'>Done!</CardTitle>
      </CardHeader>
      <CardContent>
        <p className='mb-8 text-center text-muted-foreground'>
          Your account has been successfully created. We can&apos;t wait for you
          to join us!
        </p>
        <Button
          variant='primary'
          className='w-full'
          onClick={() => navigate(-1)}
        >
          Go to Home
        </Button>
      </CardContent>
    </section>
  );
});
FinishStep.displayName = 'FinishStep';
