import { Button } from '../ui/Button';
import type { StepProps } from './types';
import { CardFooter } from '@/components/ui/Card';

type StepFooterProps = Pick<StepProps, 'onNextClick' | 'onPrevClick'> & {
  nextLabel?: string;
};

export const StepFooter = ({
  onNextClick,
  onPrevClick,
  nextLabel,
}: StepFooterProps) => (
  <CardFooter className='flex flex-row justify-between'>
    <Button onClick={onPrevClick}>Back</Button>
    <Button variant='primary' onClick={onNextClick}>
      {nextLabel || 'Next'}
    </Button>
  </CardFooter>
);
