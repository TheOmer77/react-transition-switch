import {
  type ComponentPropsWithoutRef,
  type ElementRef,
  forwardRef,
} from 'react';

import { cn } from '@/lib/utils';

export type ProgressCircleProps = ComponentPropsWithoutRef<'svg'> & {
  value: number;
  maxValue: number;
};

const RADIUS = 10,
  CIRCUMFERENCE = RADIUS * 2 * Math.PI;

export const ProgressCircle = forwardRef<
  ElementRef<'svg'>,
  ProgressCircleProps
>(({ value, maxValue, className, ...props }, ref) => (
  <svg
    {...props}
    ref={ref}
    xmlns='http://www.w3.org/2000/svg'
    width='24'
    height='24'
    viewBox='0 0 24 24'
    fill='none'
    stroke='currentColor'
    strokeWidth='2'
    strokeLinecap='round'
    strokeLinejoin='round'
    className={cn(
      'lucide lucide-circle [&>.progresscircle-full]:stroke-muted',
      className
    )}
  >
    <circle cx='12' cy='12' r={RADIUS} className='progresscircle-full' />
    <circle
      cx='12'
      cy='12'
      r={RADIUS}
      className='progresscircle-progress origin-center -rotate-90'
      strokeDasharray={`${CIRCUMFERENCE} ${CIRCUMFERENCE}`}
      strokeDashoffset={CIRCUMFERENCE - (value / maxValue) * CIRCUMFERENCE}
    />
  </svg>
));
ProgressCircle.displayName = 'ProgressCircle';
