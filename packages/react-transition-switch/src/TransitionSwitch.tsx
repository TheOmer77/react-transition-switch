import {
  Children,
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
  type PropsWithChildren,
  type ReactElement,
} from 'react';
import { Slot } from '@radix-ui/react-slot';

import { TransitionSwitchProvider } from './context';
import type {
  TransitionSwitchDirection,
  TransitionSwitchItemProps,
  TransitionSwitchProps,
} from './types';

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
      autoAdjustWidth = false,
      autoAdjustHeight = false,
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
