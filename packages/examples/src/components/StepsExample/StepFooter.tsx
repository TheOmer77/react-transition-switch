import { Button } from '../ui/Button';
import type { StepProps } from './types';
import { CardFooter } from '@/components/ui/Card';

type StepFooterProps = Pick<StepProps, 'onNextClick' | 'onPrevClick'> & {
  nextLabel?: string;
  nextDisabled?: boolean;
};

export const StepFooter = ({
  onNextClick,
  onPrevClick,
  nextLabel,
  nextDisabled,
}: StepFooterProps) => (
  <CardFooter className='flex flex-row justify-between'>
    <Button onClick={onPrevClick}>Back</Button>
    <Button variant='primary' onClick={onNextClick} disabled={nextDisabled}>
      {nextLabel || 'Next'}
    </Button>
  </CardFooter>
);
