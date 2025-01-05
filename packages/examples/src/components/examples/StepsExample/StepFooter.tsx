import { Button } from '@/components/ui/button';
import { CardFooter } from '@/components/ui/Card';

import type { StepProps } from './types';

type StepFooterProps = Pick<StepProps, 'onNextClick' | 'onPrevClick'> & {
  nextLabel?: string;
};

export const StepFooter = ({
  onNextClick,
  onPrevClick,
  nextLabel,
}: StepFooterProps) => (
  <CardFooter className='mt-auto flex flex-row justify-between md:mt-0'>
    <Button onClick={onPrevClick}>Back</Button>
    <Button variant='primary' onClick={onNextClick}>
      {nextLabel || 'Next'}
    </Button>
  </CardFooter>
);
