import {
  TransitionSwitch,
  type TransitionSwitchProps,
} from '@theomer77/react-transition-switch';
import { cn } from '@/lib/utils';

import { slide } from './index.module.css';

const Slide = ({
  className,
  children,
  ...props
}: Omit<TransitionSwitchProps, 'directional'>) => (
  <TransitionSwitch {...props} directional className={cn(slide, className)}>
    {children}
  </TransitionSwitch>
);

export default Slide;
