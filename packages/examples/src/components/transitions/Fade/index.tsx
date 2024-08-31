import {
  TransitionSwitch,
  type TransitionSwitchProps,
} from 'react-transition-switch';

import { cn } from '@/lib/utils';

import { fade } from './index.module.css';

export const Fade = ({
  className,
  children,
  ...props
}: Omit<TransitionSwitchProps, 'directional'>) => (
  <TransitionSwitch {...props} className={cn(fade, className)}>
    {children}
  </TransitionSwitch>
);
