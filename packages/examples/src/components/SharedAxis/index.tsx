import {
  TransitionSwitch,
  type TransitionSwitchProps,
} from '@theomer77/react-transition-switch';
import { cn } from '@/lib/utils';

import { sharedAxis } from './index.module.css';

export type Axis = 'x' | 'y' | 'z';

export type SharedAxisProps = Omit<TransitionSwitchProps, 'directional'> & {
  axis?: Axis;
  fadeVariant?: boolean;
};

const SharedAxis = ({
  axis = 'x',
  fadeVariant = false,
  className,
  children,
  ...props
}: SharedAxisProps) => (
  <TransitionSwitch
    {...props}
    directional
    className={cn(sharedAxis, className)}
    data-axis={axis}
    {...(fadeVariant ? { 'data-fadevariant': true } : {})}
  >
    {children}
  </TransitionSwitch>
);

export default SharedAxis;
