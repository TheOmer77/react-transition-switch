import { Children, useEffect, useState, type ReactElement } from 'react';

import {
  TransitionSwitch,
  type TransitionSwitchItemProps,
  type TransitionSwitchProps,
} from '@theomer77/react-transition-switch';
import usePrevious from 'hooks/usePrevious';
import { cn } from 'utils/cn';

import { sharedAxis } from './index.module.css';

export type Axis = 'x' | 'y' | 'z';
export type Direction = 'backward' | 'forward';

export interface SharedAxisProps extends TransitionSwitchProps {
  axis?: Axis;
  fadeVariant?: boolean;
}

const SharedAxis = ({
  axis = 'x',
  fadeVariant = false,
  value,
  className,
  children,
  ...props
}: SharedAxisProps) => {
  const [actualValue, setActualValue] = useState(value);
  const [direction, setDirection] = useState<Direction>();
  const prevValue = usePrevious(actualValue);

  useEffect(() => {
    const childrenArr = Children.toArray(
      children
    ) as ReactElement<TransitionSwitchItemProps>[];

    const valueIndex = childrenArr.findIndex(
        child => child.props.value === value
      ),
      prevValueIndex = childrenArr.findIndex(
        child => child.props.value === prevValue
      );

    setDirection(
      valueIndex < 0 || prevValueIndex < 0
        ? undefined
        : valueIndex < prevValueIndex
        ? 'backward'
        : 'forward'
    );
    setActualValue(value);
  }, [children, prevValue, value]);

  return (
    <TransitionSwitch
      {...props}
      value={actualValue}
      className={cn(sharedAxis, className)}
      data-direction={direction}
      data-axis={axis}
      {...(fadeVariant ? { 'data-fadevariant': true } : {})}
    >
      {children}
    </TransitionSwitch>
  );
};

export default SharedAxis;
