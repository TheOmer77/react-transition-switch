import { useEffect, useRef, type ComponentPropsWithoutRef } from 'react';

import { TransitionSwitchItem } from './TransitionSwitchItem';
import { TransitionSwitchProvider } from './context';
import usePrevious from './usePrevious';

export interface TransitionSwitchProps extends ComponentPropsWithoutRef<'div'> {
  activeIndex: number;
  animateInitial?: boolean;
}

export const TransitionSwitch = ({
  activeIndex = 0,
  animateInitial = false,
  children,
  ...props
}: TransitionSwitchProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const prevIndex = usePrevious(activeIndex);
  const items = Array.isArray(children) ? children : [children];

  useEffect(() => {
    const initialChild = ref.current?.children?.[0];
    if (!ref.current || typeof initialChild === 'undefined') return;

    const { width, height } = getComputedStyle(initialChild);
    ref.current.style.width = width;
    ref.current.style.height = height;
  }, []);
  return (
    <TransitionSwitchProvider
      value={{
        activeIndex,
        prevIndex,
        animateInitial,
        containerEl: ref.current,
      }}
    >
      <div {...props} ref={ref}>
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
};
