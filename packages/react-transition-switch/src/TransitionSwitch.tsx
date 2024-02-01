import {
  Children,
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
  type ComponentPropsWithoutRef,
  type ReactElement,
} from 'react';

import { TransitionSwitchProvider } from './context';
import type { TransitionSwitchItemProps } from './TransitionSwitchItem';

export type TransitionSwitchDirection = 'backward' | 'forward';
export type TransitionSwitchProps = ComponentPropsWithoutRef<'div'> & {
  /** The value of the active `<TransitionSwitchItem>` child component. */
  value: string;
  /**
   * Allows to apply a different animation based on the transition
   * direction. This will add a `data-direction` attribute to the parent,
   * which would have a value of either 'backward' or 'forward'.
   */
  directional?: boolean;
};

export const TransitionSwitch = forwardRef<
  HTMLDivElement,
  TransitionSwitchProps
>(({ value = '', directional = false, children, ...props }, ref) => {
  const [directionalValue, setDirectionalValue] = useState(value);
  const [direction, setDirection] = useState<TransitionSwitchDirection>();

  const prevValue = useRef<typeof value>();
  const innerRef = useRef<HTMLDivElement>(null);
  useImperativeHandle(ref, () => innerRef.current!, []);

  useEffect(() => {
    if (!directional) return;
    if (
      typeof prevValue.current === 'undefined' ||
      prevValue.current === value
    ) {
      prevValue.current = value;
      return;
    }

    const childrenArr = Children.toArray(
      children
    ) as ReactElement<TransitionSwitchItemProps>[];

    const valueIndex = childrenArr.findIndex(
        child => child.props.value === value
      ),
      prevValueIndex = childrenArr.findIndex(
        child => child.props.value === prevValue.current
      );

    setDirection(
      valueIndex < 0 || prevValueIndex < 0
        ? undefined
        : valueIndex < prevValueIndex
          ? 'backward'
          : 'forward'
    );
    setDirectionalValue(value);

    prevValue.current = value;
  }, [children, directional, value]);

  useEffect(() => {
    const initialChild = innerRef.current?.children?.[0];
    if (!innerRef.current || typeof initialChild === 'undefined') return;

    const { width, height } = getComputedStyle(initialChild);
    innerRef.current.style.width = width;
    innerRef.current.style.height = height;
  }, []);

  return (
    <TransitionSwitchProvider
      value={{
        value: directional ? directionalValue : value,
        containerEl: innerRef.current,
      }}
    >
      <div
        {...props}
        {...(directional ? { 'data-direction': direction } : {})}
        ref={innerRef}
      >
        {children}
      </div>
    </TransitionSwitchProvider>
  );
});
TransitionSwitch.displayName = 'TransitionSwitch';
