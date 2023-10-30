import { useEffect, useRef, type ComponentPropsWithoutRef } from 'react';
import { Presence } from '@radix-ui/react-presence';

import { TransitionSwitchItem } from './TransitionSwitchItem';
import { TransitionSwitchContext } from './context';
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
    <TransitionSwitchContext.Provider
      value={{
        activeIndex,
        prevIndex,
        animateInitial,
        containerEl: ref.current,
      }}
    >
      <div {...props} ref={ref}>
        {items.map((child, index) => (
          <Presence
            key={`sharedAxis-item-${index}`}
            present={activeIndex === index}
          >
            <TransitionSwitchItem index={index}>{child}</TransitionSwitchItem>
          </Presence>
        ))}
      </div>
    </TransitionSwitchContext.Provider>
  );
};
