import { useMemo } from 'react';

import {
  TransitionSwitch,
  type TransitionSwitchProps,
} from './TransitionSwitch';
import usePrevious from 'hooks/usePrevious';
import { cn } from 'utils/cn';

export type Axis = 'x' | 'y' | 'z';
export type Direction = 'backward' | 'forward';

export interface SharedAxisProps extends TransitionSwitchProps {
  axis?: Axis;
}

const getDirection = (activeIndex: number, prevIndex?: number): Direction =>
  typeof prevIndex === 'number' && activeIndex < prevIndex
    ? 'backward'
    : 'forward';

const SharedAxis = ({
  axis = 'x',
  activeIndex,
  className,
  children,
  ...props
}: SharedAxisProps) => {
  const prevIndex = usePrevious(activeIndex);
  const direction = useMemo(
    () => getDirection(activeIndex, prevIndex),
    [activeIndex, prevIndex]
  );

  return (
    <TransitionSwitch
      {...props}
      activeIndex={activeIndex}
      className={cn(
        'relative transition-[width,height] duration-300',
        axis === 'y'
          ? `data-[state=closed]:[&>*]:data-[direction=backward]:animate-sharedAxis-down-out
data-[state=closed]:[&>*]:data-[direction=forward]:animate-sharedAxis-up-out
data-[state=open]:[&>*]:data-[direction=backward]:animate-sharedAxis-down-in
data-[state=open]:[&>*]:data-[direction=forward]:animate-sharedAxis-up-in`
          : `data-[state=closed]:[&>*]:data-[direction=backward]:animate-sharedAxis-right-out
data-[state=closed]:[&>*]:data-[direction=forward]:animate-sharedAxis-left-out
data-[state=open]:[&>*]:data-[direction=backward]:animate-sharedAxis-right-in
data-[state=open]:[&>*]:data-[direction=forward]:animate-sharedAxis-left-in
rtl:data-[state=closed]:[&>*]:data-[direction=backward]:animate-sharedAxis-left-out
rtl:data-[state=closed]:[&>*]:data-[direction=forward]:animate-sharedAxis-right-out
rtl:data-[state=open]:[&>*]:data-[direction=backward]:animate-sharedAxis-left-in
rtl:data-[state=open]:[&>*]:data-[direction=forward]:animate-sharedAxis-right-in`,
        className
      )}
      data-direction={direction}
    >
      {children}
    </TransitionSwitch>
  );
};

export default SharedAxis;
