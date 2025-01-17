import {
  TransitionSwitch,
  type TransitionSwitchProps,
} from 'react-transition-switch';

import { cn } from '@/lib/utils';

import { fadeThrough } from './index.module.css';

export const FadeThrough = ({
  className,
  children,
  ...props
}: Omit<TransitionSwitchProps, 'directional'>) => (
  <TransitionSwitch {...props} className={cn(fadeThrough, className)}>
    {children}
  </TransitionSwitch>
);
