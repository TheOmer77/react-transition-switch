import { Children, useEffect, useState, type ReactElement } from 'react';

import {
  TransitionSwitch,
  type TransitionSwitchItemProps,
  type TransitionSwitchProps,
} from '@theomer77/react-transition-switch';
import usePrevious from 'hooks/usePrevious';
import { cn } from 'utils/cn';

export type Axis = 'x' | 'y' | 'z';
export type Direction = 'backward' | 'forward';

export interface SharedAxisProps extends TransitionSwitchProps {
  axis?: Axis;
}

const SharedAxis = ({
  axis = 'x',
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
      className={cn(
        'relative transition-[width,height] duration-300 [&>*]:absolute',
        axis === 'y'
          ? `data-[state=inactive]:[&>*]:data-[direction=backward]:animate-sharedAxis-down-out
data-[state=inactive]:[&>*]:data-[direction=forward]:animate-sharedAxis-up-out
data-[state=active]:[&>*]:data-[direction=backward]:animate-sharedAxis-down-in
data-[state=active]:[&>*]:data-[direction=forward]:animate-sharedAxis-up-in`
          : `data-[state=inactive]:[&>*]:data-[direction=backward]:animate-sharedAxis-right-out
data-[state=inactive]:[&>*]:data-[direction=forward]:animate-sharedAxis-left-out
data-[state=active]:[&>*]:data-[direction=backward]:animate-sharedAxis-right-in
data-[state=active]:[&>*]:data-[direction=forward]:animate-sharedAxis-left-in
rtl:data-[state=inactive]:[&>*]:data-[direction=backward]:animate-sharedAxis-left-out
rtl:data-[state=inactive]:[&>*]:data-[direction=forward]:animate-sharedAxis-right-out
rtl:data-[state=active]:[&>*]:data-[direction=backward]:animate-sharedAxis-left-in
rtl:data-[state=active]:[&>*]:data-[direction=forward]:animate-sharedAxis-right-in`,
        className
      )}
      data-direction={direction}
    >
      {children}
    </TransitionSwitch>
  );
};

export default SharedAxis;
