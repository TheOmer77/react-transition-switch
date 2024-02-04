import {
  Children,
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
  type ComponentPropsWithoutRef,
  type PropsWithChildren,
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
   * Change the default `<div>` element for the one passed as a child, merging
   * their props and behavior.
   *
   * When set to `true`, this component must have a single child which accepts
   * a ref, and its children should be `<TransitionSwitchItem>` components.
   *
   * @see [Radix UI composition](https://www.radix-ui.com/primitives/docs/guides/composition)
   */
  asChild?: boolean;
  /**
   * Whether or not the parent container should automatically adjust its width
   * to that of the active child.
   */
  autoAdjustWidth?: boolean;
  /**
   * Whether or not the parent container should automatically adjust its height
   * to that of the active child.
   */
  autoAdjustHeight?: boolean;
  /**
   * Add a `data-direction` attribute to the parent element, representing the
   * transition direction, which would have a value of either 'backward' or
   * 'forward'. This allows to apply a different animation based on the
   * transition direction.
   */
  directional?: boolean;
};

const validateChildren = ({
  children,
  asChild,
}: Pick<TransitionSwitchProps, 'children' | 'asChild'>) => {
  const childrenArr = Children.toArray(children);
  if (
    childrenArr.some(
      child => typeof child === 'string' || typeof child === 'number'
    )
  )
    throw new Error(
      'Strings and numbers cannot be children of TransitionSwitch.'
    );
  if (asChild && childrenArr.length !== 1)
    throw new Error(
      'TransitionSwitch expects exactly one child, which accepts a ref, when its asChild prop is true.'
    );
};

export const TransitionSwitch = forwardRef<
  HTMLDivElement,
  TransitionSwitchProps
>(
  (
    {
      value = '',
      asChild = false,
      autoAdjustWidth = true,
      autoAdjustHeight = true,
      directional = false,
      style = {},
      children,
      ...props
    },
    ref
  ) => {
    validateChildren({ children, asChild });

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

      const originalChildrenArr = Children.toArray(children);
      const childrenArr = (
        asChild
          ? Children.toArray(
              (originalChildrenArr as ReactElement<PropsWithChildren>[])[0]
                ?.props.children
            )
          : originalChildrenArr
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
    }, [asChild, children, directional, value]);

    useEffect(() => {
      const initialChild = innerRef.current?.children?.[0];
      if (!innerRef.current || typeof initialChild === 'undefined') return;

      const { width, height } = getComputedStyle(initialChild);

      if (autoAdjustWidth) innerRef.current.style.width = width;
      else if (style.width)
        innerRef.current.style.width = style.width.toString();
      else innerRef.current.style.removeProperty('width');

      if (autoAdjustHeight) innerRef.current.style.height = height;
      else if (style.height)
        innerRef.current.style.height = style.height.toString();
      else innerRef.current.style.removeProperty('height');
    }, [autoAdjustHeight, autoAdjustWidth, style]);

    const Comp = asChild ? Slot : 'div';

    return (
      <TransitionSwitchProvider
        value={{
          value: directional ? directionalValue : value,
          autoAdjustWidth,
          autoAdjustHeight,
          containerEl: innerRef.current,
        }}
      >
        <Comp
          {...props}
          {...(directional ? { 'data-direction': direction } : {})}
          ref={innerRef}
          style={style}
        >
          {children}
        </Comp>
      </TransitionSwitchProvider>
    );
  }
);
TransitionSwitch.displayName = 'TransitionSwitch';
