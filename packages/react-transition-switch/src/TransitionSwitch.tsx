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
import { Slot } from '@radix-ui/react-slot';

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
  /**
   * Change the default `<div>` element for the one passed as a child, merging
   * their props and behavior.
   *
   * When set to `true`, this component must have a single child which accepts
   * a ref, and its children should be `<TransitionSwitchItem>` components.
   *
   * @see [Radix UI Composition](https://www.radix-ui.com/primitives/docs/guides/composition)
   */
  asChild?: boolean;
};

export const TransitionSwitch = forwardRef<
  HTMLDivElement,
  TransitionSwitchProps
>(
  (
    { value = '', directional = false, asChild = false, children, ...props },
    ref
  ) => {
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

    const Comp = asChild ? Slot : 'div';

    return (
      <TransitionSwitchProvider
        value={{
          value: directional ? directionalValue : value,
          containerEl: innerRef.current,
        }}
      >
        <Comp
          {...props}
          {...(directional ? { 'data-direction': direction } : {})}
          ref={innerRef}
        >
          {children}
        </Comp>
      </TransitionSwitchProvider>
    );
  }
);
TransitionSwitch.displayName = 'TransitionSwitch';
