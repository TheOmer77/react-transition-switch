import type { ComponentPropsWithoutRef } from 'react';

export type StepProps = ComponentPropsWithoutRef<'section'> & {
  onNextClick: () => void;
  onPrevClick: () => void;
};
