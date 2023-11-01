import { useMemo } from 'react';

import {
  TransitionSwitch,
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
  const prevValue = usePrevious(value);
  const direction = useMemo(
    (): Direction | undefined =>
      typeof prevValue !== 'number' || value === prevValue
        ? undefined
        : value < prevValue
        ? 'backward'
        : 'forward',
    [value, prevValue]
  );

  return (
    <TransitionSwitch
      {...props}
      value={value}
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
