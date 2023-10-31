import {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
  type ComponentPropsWithoutRef,
} from 'react';

import { TransitionSwitchItem } from './TransitionSwitchItem';
import { TransitionSwitchProvider } from './context';

export interface TransitionSwitchProps extends ComponentPropsWithoutRef<'div'> {
  activeIndex: number;
}

export const TransitionSwitch = forwardRef<
  HTMLDivElement,
  TransitionSwitchProps
>(({ activeIndex = 0, children, ...props }, ref) => {
  const items = Array.isArray(children) ? children : [children];

  const innerRef = useRef<HTMLDivElement>(null);
  useImperativeHandle(ref, () => innerRef.current!, []);

  useEffect(() => {
    const initialChild = innerRef.current?.children?.[0];
    if (!innerRef.current || typeof initialChild === 'undefined') return;

    const { width, height } = getComputedStyle(initialChild);
    innerRef.current.style.width = width;
    innerRef.current.style.height = height;
  }, []);

  return (
    <TransitionSwitchProvider
      value={{ activeIndex, containerEl: innerRef.current }}
    >
      <div {...props} ref={innerRef}>
        {items.map((child, index) => (
          <TransitionSwitchItem
            key={`transitionSwitch-item-${index}`}
            index={index}
          >
            {child}
          </TransitionSwitchItem>
        ))}
      </div>
    </TransitionSwitchProvider>
  );
});
TransitionSwitch.displayName = 'TransitionSwitch';
