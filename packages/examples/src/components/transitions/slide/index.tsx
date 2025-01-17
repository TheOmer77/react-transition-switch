import {
  TransitionSwitch,
  type TransitionSwitchProps,
} from 'react-transition-switch';

import { cn } from '@/lib/utils';

import { slide } from './index.module.css';

export const Slide = ({
  className,
  children,
  ...props
}: Omit<TransitionSwitchProps, 'directional'>) => (
  <TransitionSwitch {...props} directional className={cn(slide, className)}>
    {children}
  </TransitionSwitch>
);
