import {
  TransitionSwitch,
  type TransitionSwitchProps,
} from '@theomer77/react-transition-switch';
import { cn } from '@/lib/utils';

import { fade } from './index.module.css';

const Fade = ({
  className,
  children,
  ...props
}: Omit<TransitionSwitchProps, 'directional'>) => (
  <TransitionSwitch {...props} directional className={cn(fade, className)}>
    {children}
  </TransitionSwitch>
);

export default Fade;
