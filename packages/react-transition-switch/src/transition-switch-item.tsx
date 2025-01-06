import {
  forwardRef,
  useContext,
  useImperativeHandle,
  useLayoutEffect,
  useRef,
} from 'react';
import { Presence } from '@radix-ui/react-presence';
import { Slot } from '@radix-ui/react-slot';

import { TransitionSwitchContext } from './context';
import type { TransitionSwitchItemProps } from './types';

export const TransitionSwitchItem = forwardRef<
  HTMLElement,
  TransitionSwitchItemProps
>(({ value, children }, ref) => {
  const { value: activeValue } = useContext(TransitionSwitchContext);
  return (
    <Presence
      key={`transitionSwitch-item-${value}`}
      present={activeValue === value}
    >
      <TransitionSwitchItemContent value={value} ref={ref}>
        {children}
      </TransitionSwitchItemContent>
    </Presence>
  );
});
TransitionSwitchItem.displayName = 'TransitionSwitchItem';

const TransitionSwitchItemContent = forwardRef<
  HTMLElement,
  TransitionSwitchItemProps
>(({ value, children }, ref) => {
  const {
    value: activeValue,
    autoAdjustWidth,
    autoAdjustHeight,
    containerEl,
  } = useContext(TransitionSwitchContext);

  const innerRef = useRef<HTMLElement>(null);
  useImperativeHandle(ref, () => innerRef.current!, []);

  useLayoutEffect(() => {
    if (innerRef.current === null || activeValue !== value) return;
    const observer = new ResizeObserver(([entry]) => {
      if (!entry) return;
      const { clientWidth, clientHeight } = entry.target,
        width = `${clientWidth}px`,
        height = `${clientHeight}px`;

      if (!containerEl) return;
      if (containerEl.style.width !== width && autoAdjustWidth)
        containerEl.style.width = width;
      if (containerEl.style.height !== height && autoAdjustHeight)
        containerEl.style.height = height;
    });
    observer.observe(innerRef.current);

    return () => observer.disconnect();
  }, [activeValue, autoAdjustHeight, autoAdjustWidth, containerEl, value]);

  return (
    <Slot
      ref={innerRef}
      data-state={activeValue === value ? 'active' : 'inactive'}
    >
      {children}
    </Slot>
  );
});
TransitionSwitchItemContent.displayName = 'TransitionSwitchItemContent';
